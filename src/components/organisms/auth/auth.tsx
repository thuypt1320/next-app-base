import { FC, ReactNode, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { authDispatch, authSelector } from "redux/stores";

interface AuthProps {
  children: ReactNode
}

export const Auth: FC<AuthProps> = ({ children }) => {
  const data = useSelector(authSelector);
  const { logout } = authDispatch();
  const router = useRouter();

  useEffect(() => {
    (!data.access_token) && router.push('/login');
    (router.pathname === '/login' && data.access_token) && router.push('/');
  }, [data]);

  return (
    <Box>
      {JSON.stringify(data)}
      {router.pathname !== '/login' && <Button onClick={logout}>Logout</Button>}
      {children}
    </Box>
  );
};
