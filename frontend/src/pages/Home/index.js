import { Container, ContainerCharacters } from "./styles";
import Seeker from "../../components/Seeker";
import Loader from "../../components/Loaders/Loader1/Loader";
import useGetFetch from "../../Hooks/useGetFetch";
import CardCharacter from "../../components/cards/CardCharacter";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, loading, error, fetchData, setMode, mode } =
    useGetFetch("characters");
  const [page, setPage] = useState(0);

  useEffect(() => {
    let { REACT_APP_API_URL, REACT_APP_API_URL_KEY } = process.env;
    let offset = page * 20;
    const URL = `${REACT_APP_API_URL}characters?limit=20&offset=${offset}${REACT_APP_API_URL_KEY}`;
    fetchData(URL);
  }, [page]);

  return (
    <Container>
      <Seeker fetchData={fetchData} setMode={setMode} />
      {!loading && mode === 1 && (
        <Pagination page={page} setPage={setPage} loading={loading} />
      )}
      <ContainerCharacters>
        {loading ? (
          <Loader message="Cargando.."></Loader>
        ) : (
          <>
            {data.map((hero) => (
              <CardCharacter key={hero.id} {...hero} />
            ))}
          </>
        )}
        {error}
      </ContainerCharacters>
    </Container>
  );
};

export default Home;
