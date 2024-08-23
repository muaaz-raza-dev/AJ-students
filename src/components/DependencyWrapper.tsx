"use client";

import ReactQueryProvider from "@/hooks/react-query-provider";
import ReduxProvider from "@/hooks/redux-provider";
import { ThemeProvider } from "@/shadcn/components/theme-provider";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function DependencyWrapper({children}:Readonly<{children:ReactNode}>) {
  return (
    <ReduxProvider>
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableColorScheme
        enableSystem
        >
          <Toaster  />
        {children}
      </ThemeProvider>
        </ReactQueryProvider>
      </ReduxProvider>
  )
}
