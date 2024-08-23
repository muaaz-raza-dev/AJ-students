"use client";
import { useEffect, useState } from "react";
import { jelly } from 'ldrs'

export const AppLoader = () => {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        jelly.register(); // Registering the custom element on the client side
        setIsClient(true);
      }
    }, []);
  
    if (!isClient) return null;
  
    return (
      <div className="w-screen h-screen z-10 fixed left-0 top-0 bg-gradient-to-bl  from-primary-foreground to-secondary  center flex-col gap-12 text-white overflow-hidden">
        <l-jelly
          size="88"
          speed="0.9"
          color="white"
        ></l-jelly>
      </div>
    );
  };
