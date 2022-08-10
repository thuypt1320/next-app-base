import { Box } from "@chakra-ui/react";
import { useFetchUsers } from "hooks/use_fetch_users";
import { DataList } from "components/templates/home/components/data_list";
import { UserCreateButton } from "components/templates/home/components/user_create_button";

export const Home = () => {
  const { data: users } = useFetchUsers();

  return (
    <Box>
      <UserCreateButton/>
      <DataList data={users}/>
    </Box>
  );
};
