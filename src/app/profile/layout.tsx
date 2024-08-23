
import ProfileNav from "@/components/profile/profile-nav";
import React, { ReactNode } from "react";

export default function ProfileLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <section>
     <ProfileNav/>
      <main>
        {children}
      </main>
    </section>
  );
}
