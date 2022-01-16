import { css, keyframes } from "styled-components";

const spinKeyFrame = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const spin = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${spinKeyFrame} ${type};
  `;
};
