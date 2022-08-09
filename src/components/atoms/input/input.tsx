import { InputProps, Input as InputChakra } from "@chakra-ui/input";
import { Box, forwardRef } from "@chakra-ui/react";

interface IInputProps extends InputProps {
  label?: string
}

export const Input = forwardRef<IInputProps, 'input'>(({ label, ...props }, ref) => {
  return <Box>
    <Box>{label}</Box>
    <InputChakra {...props} ref={ref}/>
  </Box>;

});
