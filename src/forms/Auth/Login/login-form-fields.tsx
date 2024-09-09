"use client";
import { Ilogin } from "@/types/Ilogin";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa";

const LoginFormFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ilogin>();
  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex gap-x-1 overflow-hidden !rounded-lg glassEffect px-2 py-4  items-center w-full ">
        <div className="rounded-full center p-2 bg-white">
          <FaUser className="text-[#052e16]" size={22} />
        </div>
        <input
          {...register("GRNO", { required: "GRNO is required" })}
          autoFocus
          placeholder="GRNO "
          className="!bg-transparent w-full text-lg  p-2  placeholder:text-gray-200 text-white font-medium  ring-0 outline-0 border-0 focus:outline-0 active:outline-0 focus-visible:ring-0"
        />
      </div>
      {errors.GRNO && (
        <p className="text-red-500 text-xs">{errors.GRNO.message}</p>
      )}

      <div className="flex gap-x-1 overflow-hidden !rounded-lg glassEffect px-2 py-4  items-center w-full ">
        <div className="rounded-full center p-2 bg-white">
          <FaLock className="text-[#052e16]" size={22} />
        </div>
        <input
          {...register("password", { required: "password is required" })}
          type="password"
          placeholder="Password"
          className="!bg-transparent w-full text-lg  p-2 placeholder:text-gray-200 text-white font-medium  ring-0 outline-0 border-0 focus:outline-0 active:outline-0 focus-visible:ring-0"
        />
      </div>
      {errors.password && (
        <p className="text-red-500 text-xs">{errors.password.message}</p>
      )}
    </div>
  );
};

export default LoginFormFields;
