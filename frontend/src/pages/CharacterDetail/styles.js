import styled from "styled-components";
import { BGCOLOR_TERTIARY } from "../../styles/variables";

export const ContainerCharacterDetail = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 810px) {
    grid-template-columns: 1fr;
    & figure {
      text-align: center;
    }
  }
`;
export const Image = styled.img`
  width: 100%;
`;
export const ContainerLoading = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-top: 80px;
`;
export const BoxDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  position: relative;
`;

export const Title = styled.h2`
  color: ${BGCOLOR_TERTIARY};
  font-size: 60px;
  margin: 10px 0;
  @media only screen and (max-width: 440px) {
    font-size: 40px;
  }
`;
