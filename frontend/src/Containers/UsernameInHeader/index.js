import BtnLink from "../../components/Buttons/BtnLink";

const UsernameInHeader = () => {
  const USERNAME = window.sessionStorage.getItem("Username");
  const TOKEN = window.sessionStorage.getItem("Token");

  return (
    <BtnLink
      route={TOKEN !== null ? "/User" : "/SingIn"}
      icon="fas fa-user"
      name={USERNAME !== null ? USERNAME : "Inciar sesion"}
    />
  );
};

export default UsernameInHeader;
