import { Box } from "@chakra-ui/react";
import { useAuth } from "hooks/use_auth";
export const Home = () => {
  const { data } = useAuth();
  return (
    <Box>
      Home: {JSON.stringify(data)}
    </Box>
  );
};
