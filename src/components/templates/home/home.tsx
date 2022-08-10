import { useFetchUsers } from "hooks/use_fetch_users";
import { DataList } from "components/templates/home/components/data_list";
import { UserCreateButton } from "components/templates/home/components/user_create_button";
import { LayoutMain } from "components/organisms/layout";

export const Home = () => {
  const { data: users } = useFetchUsers();

  return (
    <LayoutMain>
      <UserCreateButton/>
      <DataList data={users}/>
    </LayoutMain>
  );
};
