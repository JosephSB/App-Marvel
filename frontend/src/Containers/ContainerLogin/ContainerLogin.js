import { useState } from "react";
import Loader from "../../components/Loaders/Loader1/Loader";
import InfoSuccessfull from "../../components/Modals/InfoSuccessfull";
import useApiPostFetch from "../../Hooks/useApiPostFetch";
import { Container, Li, P_ERROR } from "./styles";

const ContainerLogin = ({ detailURL = {}, DEFAULT_FORM, children, mood }) => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const {
    loading,
    error,
    SendFormSignIn,
    SendFormRegister,
    succesfull,
    infoErrors,
  } = useApiPostFetch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const sendForm = (e) => {
    e.preventDefault();
    mood ? SendFormSignIn(form, detailURL) : SendFormRegister(form, detailURL);
  };

  return (
    <Container>
      <h1>{mood ? "Iniciar Sesion" : "Registrate"} </h1>
      {succesfull && (
        <InfoSuccessfull
          message={mood ? "Datos Correctos" : "Usted se registro exitosamente"}
          messageBtn={mood ? "Ir al inicio" : "Iniciar Sesion"}
          route={mood ? "/" : "/SingIn"}
        />
      )}
      {loading ? (
        <Loader message="Enviando tus Datos..." />
      ) : (
        children({ sendForm, handleChange, form })
      )}
      <P_ERROR> {error}</P_ERROR>
      {infoErrors.map((error, index) => (
        <Li key={index}>{error}</Li>
      ))}
    </Container>
  );
};

export default ContainerLogin;
