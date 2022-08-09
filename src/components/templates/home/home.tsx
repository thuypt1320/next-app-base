import { Box } from "@chakra-ui/react";
import { useFetchUsers } from "hooks/use_fetch_users";
import { DataList } from "components/templates/home/components/data_list";

export const Home = () => {
  const { data: users } = useFetchUsers();

  return (
    <Box>
      Home:
      <DataList data={users}/>
    </Box>
  );
};
