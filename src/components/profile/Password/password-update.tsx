"use client";
import AccountInfoLabelInputWrapper from "@/components/profile/Account/account-info-label-input-wrapper";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import PasswordUpdateInputs from "./password-update-inputs";
import PasswordPresentation from "./password-presentation";
import PasswordUpdateForm from "@/forms/password/password-update-form";

export default function PasswordUpdatePage() {
  const [toggle, setToggle] = useState(false);
  const togglePasswordVisibility = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {!toggle ? (
        <>
       <PasswordPresentation/>
       <div className="center">
       <Button variant={"secondary"} className="my-8" onClick={togglePasswordVisibility}>Change my Password</Button>
       </div>
       </>
      ) 
      : (
        <PasswordUpdateForm>
      <PasswordUpdateInputs/>
        </PasswordUpdateForm>
      )}
    </>
  );
}
