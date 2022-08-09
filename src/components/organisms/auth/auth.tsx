import { FC, ReactNode, useEffect } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/use_auth";

interface AuthProps {
  children: ReactNode
}

export const Auth: FC<AuthProps> = ({ children }) => {
  const { data, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (!data.access_token) && router.push('/login');
    (router.pathname === '/login' && data.access_token) && router.push('/');
  }, [data, router]);

  return (
    <Box justifyContent={"center"}>
      <Flex justifyContent={"flex-end"} width={"100%"}>
        {router.pathname !== '/login' && <Button onClick={logout}>Logout</Button>}
      </Flex>
      {children}
    </Box>
  );
};
