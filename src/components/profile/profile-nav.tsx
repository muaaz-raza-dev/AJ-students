"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ProfileNav() {
  const pathname = usePathname()

  
  const ActiveStyle = "border-primary border-b-2 text-primary";
  return (
    <nav className="border-b w-full overflow-auto mb-3 flex gap-x-6 px-4">
      <Link
        href={"/profile"}
        className={clsx(
          `hFont text-nowrap font-medium border-primary py-2 text-muted-foreground`,
          pathname == "/profile" && ActiveStyle
        )}
      >
        Profile
      </Link>
      <Link
        href={"/profile/acedmic"}
        className={clsx(
          `hFont text-nowrap font-medium border-primary py-2 text-muted-foreground`,
          pathname == "/profile/acedmic" && ActiveStyle
        )}
      >
        Acedmic Information
      </Link>
      <Link
        href={"/profile/password"}
        className={clsx(
          `hFont text-nowrap font-medium border-primary py-2 text-muted-foreground`,
          pathname == "/profile/password" && ActiveStyle
        )}
      >
        Manage Password
      </Link>
      <Link
        href={"/profile/devices"}
        className={clsx(
          `hFont text-nowrap font-medium border-primary py-2 text-muted-foreground`,
          pathname == "/profile/devices" && ActiveStyle
        )}
      >
        Devices
      </Link>
    </nav>
  );
}
