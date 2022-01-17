import { useEffect } from "react";
import CardWithAutoFetch from "../../Containers/CardWithAutoFetch";
import useApiGetFetch from "../../Hooks/useApiGetFetch";
import { ContainerFavCards, ContainerFavs } from "./styles";

const Favs = () => {
  const { getMyFollows, data } = useApiGetFetch();

  useEffect(() => {
    getMyFollows("Favs/getMyFollows");
  }, []);
  console.log(data);
  return (
    <ContainerFavs>
      <h1>Favoritos</h1>
      <ContainerFavCards>
        {data !== undefined ? (
          data.map((Character) => (
            <CardWithAutoFetch key={Character._id} {...Character} />
          ))
        ) : (
          <p>No tiene favoritos</p>
        )}
      </ContainerFavCards>
    </ContainerFavs>
  );
};

export default Favs;
