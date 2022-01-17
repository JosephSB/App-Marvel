import { Btn, SpanText } from "./styles";
import { Icon } from "../../../styles/globalStyles";

const BtnLink = ({ route, icon, name }) => {
  return (
    <Btn exact="true" to={route}>
      <Icon className={icon}></Icon>
      <SpanText>{name}</SpanText>
    </Btn>
  );
};

export default BtnLink;
