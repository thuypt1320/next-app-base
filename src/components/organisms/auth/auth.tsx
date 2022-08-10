import { FC, ReactNode, useEffect } from "react";
import { Box, Button, Center, Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/use_auth";
import { storageService } from "services/index";
import { credentialKeyStorage } from "services/storage_service";
interface AuthProps {
  children: ReactNode
}

export const Auth: FC<AuthProps> = ({ children }) => {
  const { data, loading, logout } = useAuth();
  const router = useRouter();
  const credential = storageService.get(credentialKeyStorage);

  useEffect(() => {
    (!credential?.access_token || !data.access_token) && router.push('/login');
  }, [credential, router, data]);

  if (loading) return <Box flex={1}><Center><Spinner/></Center></Box>;

  return (
    <Box justifyContent={"center"}>
      <Flex justifyContent={"flex-end"} width={"100%"}>
        {router.pathname !== '/login' && <Button onClick={logout}>Logout</Button>}
      </Flex>
      {children}
    </Box>
  );
};
