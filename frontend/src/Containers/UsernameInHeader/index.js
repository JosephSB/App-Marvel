import BtnLink from "../../components/Buttons/BtnLink";

const UsernameInHeader = () => {
  const USERNAME = window.sessionStorage.getItem("Username");

  return (
    <BtnLink
      route="/SingIn"
      icon="fas fa-user"
      name={USERNAME !== null ? USERNAME : "Inciar sesion"}
    />
  );
};

export default UsernameInHeader;
