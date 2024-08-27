import ErrorPage from "@/components/global/error-page";
import { ReactNode } from "react";

export default function ErrorValidator({
  isError,
  children,
  fallback,
  isLoading,
}: {
  isError: boolean;
  isLoading: boolean;
  fallback: ReactNode;
  children: ReactNode;
}) {
  if (isLoading) {
    return fallback;
  } else {
    if (isError) return <ErrorPage />;
    else return children;
  }
}
