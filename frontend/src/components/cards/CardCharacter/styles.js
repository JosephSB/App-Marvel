import styled from "styled-components";
import {
  BGCOLOR_TERTIARY,
  TEXTCOLOR_PRIMATY,
  TEXTCOLOR_SECONDARY,
} from "../../../styles/variables";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  &[aria-current] {
    color: #000;
  }
`;

export const ContainerCard = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  cursor: pointer;
  background-color: ${BGCOLOR_TERTIARY};
  transition: transform 0.2s, background-color 0.3s;
  margin: 10px;
  &::after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: #fff;
    border-style: solid;
    border-top-color: transparent;
    border-width: 12px 12px 0 0;
    bottom: 0;
    content: "";
    position: absolute;
    right: 0;
    top: auto;
    z-index: 40;
  }
  &:hover {
    z-index: 50;
    transform: scale(1.06);
    background-color: ${TEXTCOLOR_SECONDARY};
  }
`;

export const ContainerInfoCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
`;

export const Figure = styled.figure`
  margin: 0;
  background-color: ${TEXTCOLOR_SECONDARY};
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const Text = styled.p`
  color: ${TEXTCOLOR_PRIMATY};
  padding: 20px;
`;
