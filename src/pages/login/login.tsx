import { Box, Button, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { authDispatch, authSelector } from "redux/stores";
import { useRouter } from "next/router";


const Login = () => {
  const data = useSelector(authSelector);
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { login } = authDispatch();

  const handleLogin = (formValue) => {
    login(formValue);
    data.access_token && router.push('/');
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(handleLogin)} name={'loginForm'}>
        <Input defaultValue={''} {...register("username")}/>
        <Input defaultValue={''} {...register("password")}/>
        <Button type={"submit"}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
