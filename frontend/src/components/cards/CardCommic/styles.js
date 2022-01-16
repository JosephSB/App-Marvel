import styled from "styled-components";
import {
  BGCOLOR_TERTIARY,
  TEXTCOLOR_PRIMATY,
  TEXTCOLOR_SECONDARY,
} from "../../../styles/variables";

export const Figure = styled.figure`
  width: 260px;
  height: 500px;
  margin: 10px;
  background-color: ${BGCOLOR_TERTIARY};
  transition: transform 0.2s, background-color 0.3s;
  cursor: pointer;
  position: relative;
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
export const FigCaption = styled.figcaption`
  border-top: 4px solid ${TEXTCOLOR_SECONDARY};
  padding: 5px;
  color: ${TEXTCOLOR_PRIMATY};
`;
