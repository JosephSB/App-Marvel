import { Btn, SpanText } from "./styles";
import { Icon } from "../../../styles/globalStyles";

const BtnLink = ({ onClick, icon, name }) => {
  return (
    <Btn onClick={onClick}>
      <Icon className={icon}></Icon>
      <SpanText>{name}</SpanText>
    </Btn>
  );
};

export default BtnLink;
