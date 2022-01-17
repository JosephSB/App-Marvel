import CardCharacter from "../../components/cards/CardCharacter";
import Loader from "../../components/Loaders/Loader1/Loader";
import useGetFetch from "../../Hooks/useGetFetch";

const CardWithAutoFetch = ({ CharacterID }) => {
  const { data, loading, error } = useGetFetch(`characters/${CharacterID}`);

  if (loading) return <Loader message="Cargando Favorito.." />;

  return (
    <div>
      {data.length !== 0 && (
        <CardCharacter
          key={data[0].id}
          id={data[0].id}
          name={data[0].name}
          thumbnail={data[0].thumbnail}
        />
      )}
    </div>
  );
};

export default CardWithAutoFetch;
