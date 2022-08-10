import { FC, ReactNode, useEffect } from "react";
import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/use_auth";
import { storageService } from "services/index";
import { credentialKeyStorage } from "services/storage_service";
interface AuthProps {
  children: ReactNode
}

export const Auth: FC<AuthProps> = ({ children }) => {
  const { data, logout } = useAuth();
  const router = useRouter();
  const credential = storageService.get(credentialKeyStorage);

  useEffect(() => {
    (!data.access_token || data.error) && router.push('/login');
  }, [credential, router, data]);

  if (router.pathname !== '/login' && !data.access_token) return <Spinner/>;

  return (
    <Box justifyContent={"center"}>
      <Flex justifyContent={"flex-end"} width={"100%"}>
        {router.pathname !== '/login' && <Button onClick={logout}>Logout</Button>}
      </Flex>
      {children}
    </Box>
  );
};
