"use client"
import useGetDiaries from "@/hooks/Diary/useGetDiaries";
import moment from "moment";
import React, { useEffect } from "react";
import TransactionLoader from "../Transactions/transaction-list-skeleton";
import Link from "next/link";
import clsx from "clsx";
import { FaBook } from "react-icons/fa";
import { useAppSelector } from "@/context/redux-hook";

export default function HomeDiaryList() {
  const { mutate, isLoading, data } = useGetDiaries();
  const {isLogined} = useAppSelector(s=>s.credits)
  
  useEffect(() => {
   if(mutate&&isLogined) mutate(moment().format("YYYY-MM-DD"));
  }, [isLogined]);
  
  if (isLoading) return <TransactionLoader />;
  const q = data?.payload;
  return (
    <div>
        {!q?.length &&<NoDiaryFallback/>}
      {q?.map((data) => {
        return (
          <div
            className="flex justify-between items-center relative bg-secondary"
            key={data._id}
          >
            {/* unseeen PopUp */}
            {!data.isSeen && (
              <div className="w-3 h-3 absolute top-0 right-0 bg-primary rounded-full"></div>
            )}

            <div
              className={clsx(
                "bg-secondary rounded-md p-2 w-full py-4",
                data.isSeen && "!bg-transparent"
              )}
            >
              <Link href={`/diary/${data._id}`}>
                <h1 className="text-lg hFont font-bold leading-tight">
                  {data.title}
                </h1>
              </Link>
              <div className="flex justify-end items-end pt-3">
                <p className="text-xs">
                  {moment(data.date).format("dddd, DD-MMMM-YYYYY")}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const NoDiaryFallback = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 bg-secondary rounded-md ">
        <FaBook className="text-gray-400 text-6xl mb-4" />
        <h2 className="text-gray-700 dark:text-white text-xl font-semibold mb-1">
          No Diaries Yet
        </h2>
        <p className="text-gray-500 mb-4">
            Stay tuned for updates.
        </p>
       
      </div>
    );
  };