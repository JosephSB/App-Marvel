import styled from "styled-components";
import { BGCOLOR_PRIMARY } from "../../../styles/variables";

export const Heade = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${BGCOLOR_PRIMARY};
  position: fixed;
  z-index: 100;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const ContainerBarr = styled.div`
  display: none;
  padding: 10px;
  @media only screen and (max-width: 700px) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 100;
  padding: 10px;
  @media only screen and (max-width: 700px) {
    position: fixed;
    top: 80px;
    background-color: ${BGCOLOR_PRIMARY};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.3s;
    height: 100vh;
  }
`;
