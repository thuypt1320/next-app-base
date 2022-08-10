import { FC, ReactNode, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/use_auth";
interface AuthProps {
  children: ReactNode
}

export const Auth: FC<AuthProps> = ({ children }) => {
  const { data } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (!data.access_token) && router.push('/login');
  }, [router, data]);

  if (router.pathname !== '/login' && !data.access_token) return <Spinner/>;

  return (
    <Box justifyContent={"center"}>
      {children}
    </Box>
  );
};
