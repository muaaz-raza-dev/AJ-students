import { Button } from "@/shadcn/components/ui/button";
import React from "react";
import { FaFilter } from "react-icons/fa";
export default function DiaryNavbar() {
  return (
    <nav className="w-full flex  justify-between items-center">
    <Button className="h-12 text-primary" variant={"outline"} >
      <FaFilter size={20}/>
    </Button>

    <div className="flex gap-2 bg-secondary rounded-md py-2 px-4">
      <div className="bg-primary text-white  p-2 px-3 hFont font-semibold rounded-md">
        Diary
      </div>
      
    </div>
  </nav>
  )
}
