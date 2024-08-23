"use client";
import RequestLoading from "@/components/Loader/request-loading";
import useLogin from "@/hooks/Auth/useLogin";
import { Button } from "@/shadcn/components/ui/button";
import { Ilogin } from "@/types/Ilogin";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import LoginFormFields from "./login-form-fields";
export default function LoginForm() {
  const form = useForm<Ilogin>();
  const { isLoading, mutate } = useLogin();
  const FormHandler: SubmitHandler<Ilogin> = (data) => {
    mutate(data);
  };
  return (
    <FormProvider {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(FormHandler)}>
        <LoginFormFields />
        <Button disabled={isLoading} className="w-full py-8 my-5 text-xl font-bold" type="submit">
          {isLoading ? <RequestLoading /> : "Login"}
        </Button>
      </form>
    </FormProvider>
  );
}
