import { Box, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "hooks/use_auth";
export const Login = () => {
  const { data, login } = useAuth();
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleLogin = (formValue) => {
    login(formValue);
    data.access_token && router.push('/');
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)} name={'loginForm'}>
      <Box>
        <Input defaultValue={''} {...register("username")}/>
        <Input defaultValue={''} {...register("password")}/>
        <Button type={"submit"}>
          Login
        </Button>
      </Box>
    </form>
  );
};
