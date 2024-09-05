"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/shadcn/components/ui/button"


export function ModeToggle() {
  const { setTheme,theme } = useTheme()
  const handleTheme = () =>{
    const themeToApply = theme == "dark" ? "light" : "dark"
    setTheme(themeToApply)
  }
  return (
        <Button variant="outline" size="icon" onClick={handleTheme}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
