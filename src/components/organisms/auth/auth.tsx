import { FC, ReactNode, useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/use_auth";
import { Layout, LayoutMain } from "components/organisms/layout";
import { Sidebar } from "components/organisms/sidebar";
interface AuthProps {
  children: ReactNode
}

export const AuthLayout: FC<AuthProps> = ({ children }) => {
  const { data } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(!data.access_token);
    !data.access_token && router.push('/login');
  }, [router, data]);

  if (loading) return <Spinner/>;

  return (
    <Layout>
      <Sidebar/>
      <LayoutMain>{children}</LayoutMain>
    </Layout>
  );
};
