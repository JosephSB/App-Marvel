import { Heade, Container, Nav, ContainerBarr } from "./styles";
import BtnLink from "../../Buttons/BtnLink";
import { Icon } from "../../../styles/globalStyles";
import { useRef } from "react";
import Logo from "../../Logo";

const Header = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.classList.toggle("Responsive");
  };
  return (
    <Heade>
      <Container>
        <Logo />
        <ContainerBarr onClick={handleClick}>
          <Icon className="fas fa-bars fa-2x" />
        </ContainerBarr>
        <Nav ref={ref}>
          <BtnLink icon="fas fa-heart" name="Favs" />
          <BtnLink icon="fas fa-user" name="Inciar sesion" />
        </Nav>
      </Container>
    </Heade>
  );
};

export default Header;
