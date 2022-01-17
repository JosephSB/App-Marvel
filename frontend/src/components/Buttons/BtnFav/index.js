import { useEffect, useState } from "react";
import useApiGetFetch from "../../../Hooks/useApiGetFetch";
import Loader from "../../Loaders/Loader1/Loader";
import { Button } from "./styles";

const BtnFav = ({ CharacterID }) => {
  const [isFav, setIsFav] = useState(false);
  const { loading, verifyFollow, changeFollow } = useApiGetFetch(CharacterID);

  useEffect(() => {
    verifyFollow("Favs/VefifyFollowInCharacter", setIsFav);
  }, []);

  const favCharacter = () => {
    changeFollow("Favs/changefollow", setIsFav);
  };

  return (
    <Button onClick={favCharacter}>
      {loading ? (
        <Loader message="Añadiendo fav"></Loader>
      ) : (
        <i className={`fas fa-heart fa-2x ${isFav && "Fav-Active"}`}></i>
      )}
    </Button>
  );
};

export default BtnFav;
