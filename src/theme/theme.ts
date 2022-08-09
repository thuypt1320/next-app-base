import { extendTheme } from "@chakra-ui/react";
import { Button } from "theme/components/button";
import { layers } from "theme/layers";
export const theme = extendTheme({
  components: {
    Button
  },
  layerStyles: layers,
  colors: {
    brand: {
      primary: "blue",
      secondary: "yellow"
    }
  }
});
