import React from "react";
import DiaryNavbar from "./diary-navbar";
import DiaryList from "./diary-list";
import DiaryFilterbar from "./diary-filterbar";
export default function DiaryLandingPage() {
  return (
    <section className="flex flex-col gap-4">
        <DiaryNavbar/>
        <DiaryFilterbar/>
        <DiaryList/>
    </section>
  )
}
