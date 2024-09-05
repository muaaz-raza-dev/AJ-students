"use client";
import useAuthenticate from "@/hooks/Auth/useAuthenticate";
import React from "react";
import { AppLoader } from "./Loader/app-loader";

export default function APIHandler() {
  const { isLoading  } = useAuthenticate();

  if (isLoading) return <AppLoader />;
  return null;
}
