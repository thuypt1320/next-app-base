import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Input } from "components/atoms/input";

export interface IInputPasswordProps {
  mask?: string;
}

export const InputPassword: React.FC<IInputPasswordProps> = ({ mask = "+" }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>();

    function handleMaskValue() {
      if (typeof window !== "undefined") {
        const password = window.document.getElementById("password");
        const passwordMask = window.document.getElementById("password-mask");

        window.document.addEventListener("DOMContentLoaded", () => {
          const value = passwordMask?.value;
          password.setAttribute("value", value);
          passwordMask.setAttribute("value", Array(value.length).fill("+").join(""));
        });
      }
    }

    handleMaskValue();
    return (
      <Box>
        <input
          ref={ref}
          id={"password"}
          type={"password"}
        />
        {/*<in/>*/}

      </Box>
    );
  }
;
