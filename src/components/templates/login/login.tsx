import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "hooks/use_auth";
import { Card } from "components/atoms/card";
import { Input } from "components/atoms/input";
import { storageService } from "services/index";
import { credentialKeyStorage } from "services/storage_service";

export const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const credential = storageService.get(credentialKeyStorage);

  const handleLogin = (formValue) => {
    login(formValue);
  };

  if (credential?.access_token) router.push('/');

  return (
    <form onSubmit={handleSubmit(handleLogin)} name={'loginForm'}>
      <Card>
        <Input label={"User name: "} defaultValue={''} {...register("username")}/>
        <Input label={"Password:"} type={"password"} defaultValue={''} {...register("password")}/>
        <Button type={"submit"}>
          Login
        </Button>
      </Card>
    </form>
  );
};
