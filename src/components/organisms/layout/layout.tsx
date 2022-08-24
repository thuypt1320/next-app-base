import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutWrapper = styled(Box)`
  display: grid;
  grid-template:
  "header header"
  "sidebar main"
  "sidebar footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 500px 1fr;
`;

export const LayoutSidebar = styled(Box)`
  grid-area: sidebar;
  grid-template:
  "headerSidebar"
  "mainSidebar"
  "footerSidebar";
  grid-template-rows: 1fr 1fr auto;
  padding: 20px;
  margin-right: 40px;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SidebarHeader = styled(Box)`
  grid-area: headerSidebar;
  border-bottom: 1px solid #000;
  height: 100%;
  color: transparent
`;

export const SidebarMain = styled(Box)`
  grid-area: mainSidebar;
  border-bottom: 1px solid #000;
  height: 100%;
  color: transparent
`;

export const SidebarFooter = styled(Box)`
  grid-area: footerSidebar;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const LayoutHeader = styled.header`
  grid-area: header;
  padding: 20px;
  border-bottom: 1px solid black;
`;
export const LayoutMain = styled.main`
  grid-area: main;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid black
`;
export const LayoutFooter = styled.footer`
  grid-area: footer;
  border-top: 1px solid black
`;

export const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutWrapper>
    {children}
  </LayoutWrapper>;
};
