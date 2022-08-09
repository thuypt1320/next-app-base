import { FC, ReactNode, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
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
  }, [data]);

  return (
    <Box>
      {router.pathname !== '/login' && <Button onClick={logout}>Logout</Button>}
      {children}
    </Box>
  );
};
