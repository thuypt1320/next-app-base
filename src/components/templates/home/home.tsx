import { useFetchUsers } from "hooks/use_fetch_users";
import { DataList } from "components/templates/home/components/data_list";
import { UserCreateButton } from "components/templates/home/components/user_create_button";
import { AuthLayout } from "components/organisms/auth";

export const Home = () => {
  const { data: users } = useFetchUsers();

  return (
    <AuthLayout>
      <UserCreateButton/>
      <DataList data={users}/>
    </AuthLayout>
  );
};
