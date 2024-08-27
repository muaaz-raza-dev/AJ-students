"use client";
import useFetchOneTimeFeeRecord from "@/hooks/payments/useFetchOneTime";
import clsx from "clsx";
import moment from "moment";
import React from "react";
import RecordsOneTimeSkeleton from "./records-oneTime-skeleton";
import Link from "next/link";

const statusBtnStyle = `text-sm px-4 py-1 rounded-full  font-semibold text-white`;
export default function RecordsOneTime() {
  const { data, isLoading } = useFetchOneTimeFeeRecord();
  const q = data?.payload;
  if (isLoading) return <RecordsOneTimeSkeleton />;
  return (
    <section>
      {q?.map((data) => {
        return (
          <div
            className="w-full rounded-lg overflow-hidden  p-4  bg-secondary-foreground text-white dark:text-black mb-2"
            key={data.feeTitle}
          >
            {/* Month Header */}
            <div className="flex justify-between">
              <div className="text-xl font-bold  ">{data.feeTitle}</div>
              <div
                className={clsx(
                  statusBtnStyle,
                  data.status == "Paid" ? "bg-green-800" : "bg-red-800"
                )}
              >
                {data.status}
              </div>
            </div>
            {/* Fee Amount */}
            <div className=" text-base">
              <span className="font-semibold ">Amount: </span> {data.amount} PKR
            </div>
            {data.status === "Paid" && (
              <div className="text-sm text-gray-700 mt-1">
                <div className="">
                  <Link href={`/payments/${data.Invoice}`} className="font-semibold text-black">
                  Invoice No: {data.Invoice}
                  </Link>
                </div>
                <div className="">
                  <span className="font-semibold">Payment Date:</span>
                  {moment(data.Time).format("DD MMMM YYYY")}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

