import { useEffect, useState } from "react";
import { ContainerSeeker, Input, Btn } from "./styles";

const Seeker = ({ fetchData, setMode }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleSearchWord = (e) => setSearchWord(e.target.value);

  useEffect(() => {
    let { REACT_APP_API_URL, REACT_APP_API_URL_KEY2, REACT_APP_API_URL_KEY } =
      process.env;
    if (searchWord.length > 3) {
      setMode(2);
      const URL = `${REACT_APP_API_URL}characters?nameStartsWith=${searchWord}${REACT_APP_API_URL_KEY2}`;
      fetchData(URL, searchWord);
    }
    if (searchWord.length === 0) {
      setMode(1);
      fetchData(`${REACT_APP_API_URL}characters${REACT_APP_API_URL_KEY}`);
    }
  }, [searchWord]);

  return (
    <ContainerSeeker>
      <Input
        onChange={handleSearchWord}
        type="text"
        placeholder="Personaje: "
      />
      <Btn>
        <i className="fas fa-search"></i>
      </Btn>
    </ContainerSeeker>
  );
};

export default Seeker;
