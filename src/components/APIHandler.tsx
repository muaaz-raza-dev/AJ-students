"use client";
import useAuthenticate from "@/hooks/Auth/useAuthenticate";
import useFetchGlobalInfo from "@/hooks/global/useFetchGlobalInfo";
import React, { useEffect } from "react";
import { AppLoader } from "./Loader/app-loader";
import { useAppSelector } from "@/context/redux-hook";

export default function APIHandler() {
  const {isLogined} = useAppSelector(s=>s.credits)
  const { isLoading ,refetch:rehit } = useAuthenticate();
  useEffect(() => {
  rehit();
  }, [isLogined,rehit])
  if (isLoading) return <AppLoader />;
  return null;
}
