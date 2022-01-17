import { useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";

const useApiPostFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [infoErrors, setInfoErrors] = useState([]);
  const [succesfull, setSuccesfull] = useState(false);

  const fetchPost = (form, DetailURL, cb) => {
    setSuccesfull(false);
    setLoading(true);
    let options = {
      body: form,
      headers: { "content-type": "application/json" },
    };
    const URL = `${process.env.REACT_APP_APIMARVEL_URL}${DetailURL}`;
    helpHttp()
      .post(URL, options)
      .then((res) => {
        if (res.error) {
          setError(res.message);
          res?.infoErrors && setInfoErrors(res.infoErrors);
        } else {
          cb(res);
        }
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const SendFormSignIn = (form, DetailURL) => {
    fetchPost(form, DetailURL, (res) => {
      setError("");
      setSuccesfull(true);
      window.sessionStorage.setItem("Token", res.token);
      window.sessionStorage.setItem("Username", form.Username);
    });
  };

  const SendFormRegister = (form, DetailURL) => {
    fetchPost(form, DetailURL, () => {
      setError("");
      setSuccesfull(true);
    });
  };

  return {
    loading,
    error,
    SendFormSignIn,
    SendFormRegister,
    succesfull,
    infoErrors,
  };
};

export default useApiPostFetch;
