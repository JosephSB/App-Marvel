import { Link, ModalContainer } from "./styles";

const InfoSuccessfull = ({ message, route, messageBtn }) => {
  return (
    <ModalContainer>
      <i className="fas fa-check-circle fa-6x"></i>
      <br />
      <h2>{message} </h2>
      <br />
      <Link href={route}>
        <i className="fas fa-long-arrow-alt-left"></i>
        &nbsp; {messageBtn}
      </Link>
    </ModalContainer>
  );
};

export default InfoSuccessfull;
