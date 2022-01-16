import { Fragment } from "react";
import { useParams } from "react-router-dom";
import BtnBack from "../../components/Buttons/BtnBack";
import BtnFav from "../../components/Buttons/BtnFav";
import Loader from "../../components/Loaders/Loader1/Loader";
import Commics from "../../components/Sections/Commics";
import useGetFetch from "../../Hooks/useGetFetch";
import {
  BoxDetail,
  ContainerCharacterDetail,
  ContainerLoading,
  Image,
  Title,
} from "./styles";

const CharacterDetail = () => {
  let { id } = useParams();
  const DETAILURL = `characters/${id}`;

  const { data, loading } = useGetFetch(DETAILURL);

  if (loading)
    return (
      <ContainerLoading>
        <Loader message="Cargando.."></Loader>
      </ContainerLoading>
    );

  return (
    <Fragment>
      <ContainerCharacterDetail>
        <figure>
          <Image
            src={data[0]?.thumbnail?.path + "." + data[0]?.thumbnail?.extension}
            width={400}
            alt={data[0]?.name}
          ></Image>
        </figure>

        <BoxDetail>
          <BtnFav />
          <BtnBack title="Regresar" />
          <Title>{data[0]?.name.toUpperCase()}</Title>
          <p>
            {data[0]?.description === ""
              ? "No hay descripcion de este personaje"
              : data[0]?.description}{" "}
          </p>
        </BoxDetail>
      </ContainerCharacterDetail>
      <Commics CharacterID={id} />
    </Fragment>
  );
};

export default CharacterDetail;
