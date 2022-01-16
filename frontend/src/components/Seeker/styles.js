import styled from "styled-components";
import {
  BGCOLOR_HOVER,
  BGCOLOR_SECONDARY,
  TEXTCOLOR_PRIMATY,
} from "../../styles/variables";

export const ContainerSeeker = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin: 0 auto;
`;

export const Input = styled.input`
  outline: none;
  width: 80%;
  height: 40px;
  border: 1px solid ${BGCOLOR_SECONDARY};
`;
export const Btn = styled.button`
  cursor: pointer;
  width: 20%;
  height: 40px;
  background-color: ${BGCOLOR_SECONDARY};
  color: ${TEXTCOLOR_PRIMATY};
  &:hover {
    background-color: ${BGCOLOR_HOVER};
  }
`;
