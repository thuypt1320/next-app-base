import { NextPage } from "next";
import { Home } from "components/templates/home";
import { Sidebar } from "components/organisms/sidebar";
import { Layout } from "components/organisms/layout";
const HomePage: NextPage = () => {
  return (
    <Layout>
      <Sidebar/>
      <Home/>
    </Layout>
  );
};

export default HomePage;
