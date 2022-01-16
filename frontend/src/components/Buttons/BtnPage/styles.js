import styled from "styled-components";
import {
  BGCOLOR_SECONDARY,
  TEXTCOLOR_PRIMATY,
  TEXTCOLOR_SECONDARY,
} from "../../../styles/variables";

export const BtnPag = styled.button`
  cursor: pointer;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin: 5px;
  color: ${TEXTCOLOR_PRIMATY};
  background-color: ${BGCOLOR_SECONDARY};
  transition: background-color 0.2s;
  &[aria-current] {
    background-color: ${TEXTCOLOR_SECONDARY};
  }
  &:hover {
    background-color: ${TEXTCOLOR_SECONDARY};
  }
`;
