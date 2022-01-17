import { Heade, Container, Nav, ContainerBarr } from "./styles";
import BtnLink from "../../Buttons/BtnLink";
import { Icon } from "../../../styles/globalStyles";
import { useRef } from "react";
import Logo from "../../Logo";
import UsernameInHeader from "../../../Containers/UsernameInHeader";

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
          <BtnLink route="/Favs" icon="fas fa-heart" name="Favs" />
          <UsernameInHeader />
        </Nav>
      </Container>
    </Heade>
  );
};

export default Header;
