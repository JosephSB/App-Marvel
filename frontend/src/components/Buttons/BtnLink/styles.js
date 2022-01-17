import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  BGCOLOR_SECONDARY,
  TEXTCOLOR_PRIMATY,
  BGCOLOR_HOVER,
} from "../../../styles/variables";

export const Btn = styled(NavLink)`
  width: 200px;
  height: 60px;
  text-decoration: none;
  border-radius: 6px;
  text-align: center;
  padding: 20px;
  background-color: ${BGCOLOR_SECONDARY};
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${BGCOLOR_HOVER};
    border: 2px solid ${BGCOLOR_SECONDARY};
  }
`;
export const SpanText = styled.span`
  padding: 5px;
  color: ${TEXTCOLOR_PRIMATY};
`;

export const Logo = styled.img`
  width: 160px;
  height: 60px;
`;
