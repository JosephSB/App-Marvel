import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Appear } from "../../../styles/animates";

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: fixed;
  background-color: #4bb543;
  color: whitesmoke;
  padding: 50px;
  border-radius: 20px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 49;
  ${Appear}
`;

export const Link = styled.a`
  text-decoration: none;
  list-style: none;
  color: whitesmoke;
  margin: 10px;
  cursor: pointer;
`;
