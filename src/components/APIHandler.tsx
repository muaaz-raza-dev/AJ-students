"use client";
import useAuthenticate from "@/hooks/Auth/useAuthenticate";
import React, { ReactNode } from "react";
import { AppLoader } from "./Loader/app-loader";

export default function AuthenticatedRoutes({children}:{children:ReactNode}) {
  const { isLoading } = useAuthenticate();
  if (isLoading) return <AppLoader />;
  return children;
}
