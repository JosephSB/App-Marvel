import styled from "styled-components";
import {
  BGCOLOR_TERTIARY,
  TEXTCOLOR_PRIMATY,
  TEXTCOLOR_SECONDARY,
} from "../../../styles/variables";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 10px;
  color: ${BGCOLOR_TERTIARY};
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${TEXTCOLOR_SECONDARY};
  }
`;
