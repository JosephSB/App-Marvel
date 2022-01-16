import { Button } from "./styles";
import { useNavigate } from "react-router-dom";

const BtnBack = ({ title }) => {
  let navigate = useNavigate();
  const back = () => navigate("/");

  return (
    <Button onClick={back}>
      <i className="fas fa-long-arrow-alt-left"></i>
      &nbsp;
      {title}
    </Button>
  );
};
export default BtnBack;
