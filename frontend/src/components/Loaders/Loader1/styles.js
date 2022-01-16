import styled from "styled-components";
import { spin } from "../../../styles/animates";
import { BGCOLOR_SECONDARY } from "../../../styles/variables";

export const ContainerLoader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Preloader = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-top: 10px solid #666;
  border-radius: 50%;
  ${spin({ time: "2s", type: "infinite" })}
`;
export const TextLoader = styled.span`
  color: ${BGCOLOR_SECONDARY};
  padding: 5px 0;
`;
