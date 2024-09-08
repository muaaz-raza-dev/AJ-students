"use client";
import { RiHome4Fill } from "react-icons/ri";
import { FaBookReader, FaRegCreditCard, FaUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export default function NavigationBar() {
  const pathname = usePathname();
  const activeClass = `text-primary-foreground bg-primary`;
  const regularClass =  `flex flex-col text-muted-foreground  items-center aspect-square h-12 center rounded-full  `
  if (pathname.includes("/auth")) return null;
  
  return (
    <nav className="fixed bottom-2 w-full  min-h-12  center z-[99] ">
      <ul className="flex gap-12 max-md:justify-between  bg-secondary-foreground shadow-sm rounded-full font-semibold h-full px-4  py-2 ">
        <Link
          href={"/"}
          className={clsx(regularClass,pathname == "/" && activeClass)}
        >
          <RiHome4Fill size={24}/>
        </Link>
        <Link href={'/payments'}
          className={clsx(regularClass,pathname == "/payments" && activeClass)}
        >
          <FaRegCreditCard size={24} />
        </Link>
        
        <Link href={'/diary'}
          className={clsx(regularClass,pathname == "/diary" && activeClass)}
        >
          <FaBookReader size={24}/>
        </Link>

        <Link href={"/profile"}
          className={clsx(regularClass,pathname == "/profile" && activeClass)}
        >
          <FaUser size={24} />
        </Link>
      </ul>
    </nav>
  );
}
