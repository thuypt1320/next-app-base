import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "hooks/use_auth";
import { Card } from "components/atoms/card";
import { Input } from "components/atoms/input";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";

export const Login = () => {
  const { data, login } = useAuth();

  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleLogin = (formValue) => {
    login(formValue);
  };

  const handleLoginGoogle = () => {
    login({ type: 'google' });
  };

  useEffect(() => {
    data.access_token && router.push('/');
  }, [data, router]);

  return (
    <form onSubmit={handleSubmit(handleLogin)} name={'loginForm'}>
      <Card>
        <Input label={"User name: "} defaultValue={''} {...register("username")}/>
        <Input label={"Password:"} type={"password"} defaultValue={''} {...register("password")}/>
        <Button type={"submit"}>
          Login
        </Button>
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          onSuccess={handleLoginGoogle}
        />
      </Card>
    </form>
  );
};
