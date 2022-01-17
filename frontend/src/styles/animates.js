import { css, keyframes } from "styled-components";

const spinKeyFrame = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const AppearKeyFrame = keyframes`
  from {
      opacity: 0;
    transform: translateY(30px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;
export const spin = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${spinKeyFrame} ${type};
  `;
};
export const Appear = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${AppearKeyFrame} ${type};
  `;
};
