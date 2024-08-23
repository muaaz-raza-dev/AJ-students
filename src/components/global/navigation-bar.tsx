"use client";
import { RiHome4Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCreditCard, FaUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export default function NavigationBar() {
  const pathname = usePathname();
  const activeClass = `text-primary-foreground bg-primary`;
  const regularClass =  `flex flex-col text-muted-foreground  items-center aspect-square h-12 center rounded-full  `
  if (pathname.includes("/auth")) return null;
  
  return (
    <nav className="fixed bottom-2 w-full  min-h-12  center z-[999]">
      <ul className="flex gap-12 max-md:justify-between  bg-secondary-foreground shadow-sm rounded-full font-semibold h-full px-4  py-2 ">
        <Link
          href={"/"}
          className={clsx(regularClass,pathname == "/" && activeClass)}
        >
          <RiHome4Fill size={24}/>
        </Link>
        <div
          className={clsx(regularClass,pathname == "/transactions" && activeClass)}
        >
          <FaRegCreditCard size={24} />
        </div>
        <div
          className={clsx(regularClass,pathname == "/settings" && activeClass)}
        >
          <IoSettingsOutline size={24} />
        </div>

        <Link href={"/profile"}
          className={clsx(regularClass,pathname == "/profile" && activeClass)}
        >
          <FaUser size={24} />
        </Link>
      </ul>
    </nav>
  );
}
