import { ReactNode } from "react";
import DragabbleLogo from "@/components/Auth/dragabble-logo";
import GotoHomeBtn from "@/components/Auth/goto-home-btn";

export default function Loginlayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="w-screen backdrop-blur-md min-h-screen bg-gradient-to-bl center  from-[#052e1d] to-[#032014] relative" >
      <GotoHomeBtn/>
      <div className="lg:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full gap-y-8   flex flex-col items-center p-12 max-sm:p-4 rounded-md">
        <DragabbleLogo />
        {children}
      </div>
    </main>
  );
}
