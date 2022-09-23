import React from "react";
import { Box } from "@chakra-ui/react";
import { pseudoStyle } from "styles/pseudoStyle";
import { spinAnimation } from "styles/spin_animation";
import { images } from "assets/images";

export interface IImageSpinnerProps {

}

export const ImageSpinner: React.FC<IImageSpinnerProps> = ({}) => {
  return (
    <Box
      _before={{
        ...pseudoStyle,
        ...spinAnimation,
        backgroundImage: images.oneLine.src,
        backgroundSize: "contain",
        height: "50px",
        aspectRatio: "134/117"
      }}
      position={"relative"}
    />
  );
};
