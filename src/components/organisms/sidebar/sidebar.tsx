import { LayoutSidebar, SidebarFooter } from "components/organisms/layout";
import { Button } from "@chakra-ui/react";
import { useAuth } from "hooks/use_auth";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };


  return (
    <LayoutSidebar>
      <SidebarFooter>
        <Button onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </LayoutSidebar>
  );
};
