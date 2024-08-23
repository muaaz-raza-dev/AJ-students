"use client";

import { Provider } from "react-redux";
import { Store } from '@/context/redux-store'
import { ReactNode } from "react";

export default function ReduxProvider({children}:Readonly<{children:ReactNode}>) {
  return (
    <Provider store={Store}>
        {children}
        </Provider>

  )
}
