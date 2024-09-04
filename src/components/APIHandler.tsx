"use client";
import useAuthenticate from "@/hooks/Auth/useAuthenticate";
import React, { useEffect } from "react";
import { AppLoader } from "./Loader/app-loader";
import { useAppSelector } from "@/context/redux-hook";

export default function APIHandler() {
  const {isLogined} = useAppSelector(s=>s.credits)
  const { isLoading ,refetch } = useAuthenticate();

  useEffect(() => {
  if(isLogined) refetch();
  }, [isLogined,rehit])

  if (isLoading) return <AppLoader />;
  return null;
}
