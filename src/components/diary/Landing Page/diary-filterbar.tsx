"use client";
import useGetDiaries from "@/hooks/Diary/useGetDiaries";
import moment from "moment";
import React, { ChangeEvent, useState } from "react";
export default function DiaryFilterbar() {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const {mutate,isLoading} = useGetDiaries()

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    mutate(e.target.value);
  };

  return (
    <section className="w-full flex gap-4 justify-between items-center bg-secondary p-2 rounded-md">
      <input
        type="date"
        disabled={isLoading}
        placeholder="Select Diary Date"
        className="w-full border p-1 px-2 rounded-md"
        value={date}
        onChange={handleDateChange}
      />
    </section>
  );
}
