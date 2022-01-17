import { useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";

const useApiGetFetch = (CharacterID = "") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [succesfull, setSuccesfull] = useState(false);
  const [data, setData] = useState([]);

  const fetchGet = (URL, cb) => {
    setSuccesfull(false);
    setLoading(true);

    let token = window.sessionStorage.getItem("Token");
    let headers;
    if (token === null) {
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
    }
    let options = {
      headers,
    };
    helpHttp()
      .get(URL, options)
      .then((res) => {
        if (res.error) {
          setError(res.message);
        } else {
          setSuccesfull(true);
          setError("");
          cb(res);
        }
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const verifyFollow = (DetailURL, cb) => {
    const URL = `${process.env.REACT_APP_APIMARVEL_URL}${DetailURL}/${CharacterID}`;
    fetchGet(URL, (res) => {
      cb(res.fav);
    });
  };

  const changeFollow = (DetailURL, cb) => {
    const URL = `${process.env.REACT_APP_APIMARVEL_URL}${DetailURL}/${CharacterID}`;
    fetchGet(URL, (res) => {
      if (res.message === "Follow added") cb(true);
      else cb(false);
    });
  };

  const getMyFollows = (DetailURL) => {
    const URL = `${process.env.REACT_APP_APIMARVEL_URL}${DetailURL}`;
    fetchGet(URL, (res) => {
      setData(res.results);
    });
  };

  return {
    loading,
    error,
    succesfull,
    verifyFollow,
    changeFollow,
    getMyFollows,
    data,
  };
};

export default useApiGetFetch;
