import styled from "styled-components";
import { BGCOLOR_TERTIARY, TEXTCOLOR_PRIMATY } from "../../../styles/variables";

export const Button = styled.button`
  cursor: pointer;
  background-color: ${BGCOLOR_TERTIARY};
  padding: 10px;
  color: ${TEXTCOLOR_PRIMATY};
  border-radius: 10px;
`;
