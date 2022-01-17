import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  BGCOLOR_SECONDARY,
  BGCOLOR_TERTIARY,
  TEXTCOLOR_PRIMATY,
  TEXTCOLOR_SECONDARY,
} from "../../styles/variables";

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
  text-align: start;
`;
export const InputText = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  text-align: start;
  outline: none;
  padding: 0 10px;
`;
export const InputBtn = styled.input`
  width: 100%;
  margin: 20px 0;
  height: 40px;
  border: none;
  cursor: pointer;
  color: ${TEXTCOLOR_PRIMATY};
  background-color: ${BGCOLOR_TERTIARY};
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background-color: ${TEXTCOLOR_SECONDARY};
  }
`;
export const Link = styled(NavLink)`
  width: 100%;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  color: ${BGCOLOR_SECONDARY};
  &:hover {
    color: ${TEXTCOLOR_SECONDARY};
  }
`;
