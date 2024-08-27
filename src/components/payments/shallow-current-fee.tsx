"use client";
import useFetchCurrentFeeStatus from "@/hooks/payments/useFetchCurrentFeeStatus";
import clsx from "clsx";
import moment from "moment";
import React from "react";
import { FaClock, FaTicketAlt } from "react-icons/fa";

export default function ShallowCurrentFee() {
  const { isLoading, data } = useFetchCurrentFeeStatus();
  const q = data?.payload;
  if (isLoading) return <> loading... </>;
  return (
    <div className="flex flex-wrap gap-2">
      {/* Example of Paid Fee Card */}
      {q?.map((e) => {
        return (
          <div
            key={e.paymentDate}
            className={clsx(
              ` text-black shadow-md rounded-lg p-4 w-full transform transition-transform hover:scale-105 hover:shadow-lg`,
              e.status === "Paid" && "bg-primary",
              e.status === "Due" && "bg-destructive text-white"
            )}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Monthly Fee</h2>
              <button
                className={clsx(
                  " font-bold text-sm bg-white  px-3 py-1 rounded-full ",
                  e.status === "Paid" && "text-primary",
                  e.status === "Due" && "text-destructive"
                )}
              >
                {e.status}
              </button>
            </div>
            <p className=" font-semibold  ">
              {e.month} {e.year}
            </p>
            <div className="flex justify-between items-center font-medium text-muted text-sm">
              <p className="font-semibold  ">
                {e.status == "Due" ? "Due from" : "Paid on"}{" "}
                {moment(e.status == "Due" ? e.paymentDate : e.Time).format(
                  "DD MMMM YYYY"
                )}
              </p>
              {e.status == "Due" && (
                <div className="text-  px-3 py-1 rounded-full flex gap-2 items-center">
                  <FaClock size={14} /> Dues by{" "}
                  {moment().diff(moment(e.paymentDate), 'days')} days
                </div>
              )}
            </div>
            {e.status == "Paid" && (
              <div className="flex gap-2 items-center mt-1">
                <FaTicketAlt size={16} className=" " />
                <p className="text-sm  font-semibold underline ">
                  Invoice No: ${e.Invoice}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
