import { BoxProps, Stack } from "@chakra-ui/react";
import { FC } from "react";

export const Card: FC<BoxProps> = ({ children, ...props }) => {
  return <Stack
    spacing={2}
    borderRadius={8}
    padding={4}
    marginX={"auto"}
    marginY={8}
    border={"1px solid"}
    justifyContent={"center"}
    alignItems={"center"}
    layerStyle={"base"}
    width={"500px"}
    {...props}
  >
    {children}
  </Stack>;
};
