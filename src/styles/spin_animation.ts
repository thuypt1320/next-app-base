import { keyframes } from "@chakra-ui/react";

export const spin = keyframes`
  from { transform: rotate(0deg); },
  to { transform: rotate(180deg); }
`;

export const spinAnimation = {
  animation: `${spin} infinite 0.5s linear`
};
