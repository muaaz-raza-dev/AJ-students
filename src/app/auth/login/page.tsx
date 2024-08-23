import React from "react";
import { Button } from "@/shadcn/components/ui/button";
import LoginForm from "@/forms/Auth/Login/login-form";
import Link from "next/link";
export default function LoginPage() {
  return (
    <>
      <LoginForm/>
      <div className="flex items-center space-x-2 ">
        <Link href={"forgot-password"}>
        <Button variant="link" className="w-full text-white">
          Forgot Password?
        </Button>
        </Link>
      </div>
    </>
  );
}

