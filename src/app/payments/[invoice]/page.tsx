"use client";
import ErrorValidator from "@/hooks/global/ErrorValidator";
import useFetchDetailedInvoice from "@/hooks/home/useFetchDetailedInvoice";
import { Button } from "@/shadcn/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import moment from "moment";
import React from "react";
import InvoiceLoadingSkeleton from "./loading";

export default function InvoiceDetailPage() {
  const { isLoading, data,isError } = useFetchDetailedInvoice();
  const q = data?.payload;

  function PaymentTitle(tr: {
    paymentTitle: string;
    paymentType: "Custom" | "Registered";
    paymentConfigId: string;
    month?: string;
    year?: string;
    sessionId?: {acedmic_year:string};
    amount: {
      totalAmount: number;
      realAmount: number;
      discount: number;
    };
  }) {
    if(tr.paymentType=="Custom") return tr.paymentTitle
    else {
      if(tr.month ) return `${tr.month} ${tr.year} ${tr.paymentTitle}`
      else return `${tr.sessionId?.acedmic_year} ${tr.paymentTitle}`
    }
  }

  return (
    <ErrorValidator isLoading={isLoading} isError={isError} fallback={<InvoiceLoadingSkeleton/>}>
      <div className="bg-secondary p-6 rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">Invoice #{q?.Invoice}</h2>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="font-medium">Student Information:</p>
            <p className="font-semibold">{`${q?.Student?.GRNO} ${q?.Student?.FirstName} ${q?.Student?.LastName}`}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-muted-foreground text-sm">Paid By:</p>
            <p className="font-semibold">{q?.PayorsName}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-muted-foreground text-sm">Payment Time:</p>
            <p className="font-semibold">
              {moment(q?.Time).format("DD MMMM YYYY hh:mm")}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-muted-foreground text-sm">Recieved By:</p>
            <p className="font-semibold">{q?.RecievedBy?.Name}</p>
          </div>
          {q?.Note&&
          <div className="flex justify-between">
            <p className="text-muted-foreground text-sm">Note :</p>
            <p className="font-semibold text-xs w-[70%] text-right">
              {q?.Note}{" "}
            </p>
          </div>
          }
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="bg-white dark:bg-background min-w-full divide-y ">
            <thead>
              <tr>
                <th
                  className="px-6 py-3 text-left   
 text-xs font-medium  uppercase tracking-wider"
                >
                  Item
                </th>
                <th
                  className="px-6 py-3 text-right   
 text-xs font-medium  uppercase tracking-wider"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y ">
              {q?.Transactions?.map((e) => (
                <tr key={e.paymentConfigId}>
                  <td
                    className="px-4 py-4 whitespace-nowrap   
 text-sm "
                  >
                    {PaymentTitle(e)}
                  </td>
                  <td className="px-6 py-4 text-sm text-right ">
                    {e?.amount?.totalAmount?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-1 items-end mt-4">
          {q?.amount?.discount?
          <>
          <div className=" flex justify-end items-center gap-2">
            <p className="text-muted-foreground text-sm  font-medium">
              Total Amount (PKR):
            </p>
            <p className="font-bold text-lg"> {q?.amount?.realAmount?.toFixed(2)} </p>
          </div>
          <div className=" flex justify-end items-center gap-2">
            <p className="text-green-600 text-sm font-medium">
              Discounts (PKR):
            </p>
            <p className="font-bold text-lg"> {q?.amount?.discount?.toFixed(2)}</p>
          </div>
          </>:null
           }
          <div className=" flex justify-end items-center gap-2 border-t dark:border-t-white py-2">
            <p className="font-semibold">Grand Total (PKR):</p>
            <p className="font-bold text-lg"> {q?.amount?.totalAmount?.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <Button className="mt-4 w-full py-6 flex gap-2" disabled>
        <DownloadIcon />
        Download Invoice
      </Button>
      </ErrorValidator>
  );
}
