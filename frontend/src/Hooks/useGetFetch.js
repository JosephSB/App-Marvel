import { useEffect, useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";

const useGetFetch = (detailUrl) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mode, setMode] = useState(1); //1 pagination - 2 search by word
  const [data, setData] = useState([]);
  let { REACT_APP_API_URL, REACT_APP_API_URL_KEY } = process.env;

  const fetchData = (URL, Word = "") => {
    setLoading(true);
    helpHttp()
      .get(URL)
      .then((res) => {
        if (res.code === 200 && res.status === "Ok") {
          setData(res.data.results);
          setLoading(false);
          setError("");
        }
        if (res.data.total === 0)
          setError(`No se encontro datos sobre el personaje ${Word}`);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setLoading(true);
    const URL = `${REACT_APP_API_URL}${detailUrl}${REACT_APP_API_URL_KEY}`;
    fetchData(URL);
  }, []);

  return { data, loading, error, fetchData, setMode, mode };
};

export default useGetFetch;
