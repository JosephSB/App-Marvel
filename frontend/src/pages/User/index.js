import { BtnUser, ContainerUser } from "./styles";

const User = () => {
  const SignOff = () => {
    window.sessionStorage.removeItem("Username");
    window.sessionStorage.removeItem("Token");
    window.location.href = "/";
  };
  return (
    <ContainerUser>
      <h1>{window.sessionStorage.getItem("Username")}</h1>
      <BtnUser onClick={SignOff}>Cerrar Session</BtnUser>
    </ContainerUser>
  );
};

export default User;
