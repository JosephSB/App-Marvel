import useGetFetch from "../../../Hooks/useGetFetch";
import CardCommic from "../../cards/CardCommic";
import Loader from "../../Loaders/Loader1/Loader";
import { ContainerCardsCommics, ContainerCommics, Title } from "./styles";

const Commics = ({ CharacterID }) => {
  const DETAILURL = `characters/${CharacterID}/comics`;
  const { data, loading } = useGetFetch(DETAILURL);
  console.log(data);

  if (loading) return <Loader message="Cargando.."></Loader>;

  return (
    <ContainerCommics>
      <Title>COMMICS</Title>
      <ContainerCardsCommics>
        {data.map((commic) => (
          <CardCommic
            key={commic.id}
            title={commic.title}
            image={commic.thumbnail}
          ></CardCommic>
        ))}
      </ContainerCardsCommics>
    </ContainerCommics>
  );
};

export default Commics;
