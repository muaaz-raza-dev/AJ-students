import HomePageHeader from "@/components/home/home-page-header";
import TransactionListSection from "@/components/home/Transactions/transaction-list";
import ShallowDueDetailsComp from "@/components/payments/landing/shallow-due-details-comp";
import ShallowCurrentFee from "@/components/payments/shallow-current-fee";
import { Button } from "@/shadcn/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiFileList2Fill } from "react-icons/ri";

export default function PaymentPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="">
        <HomePageHeader title="Recent Fee Status" />
        <ShallowCurrentFee />
      </div>
      
      <ShallowDueDetailsComp />

      <div className="flex gap-2">
        <Link href={"/payments/records"}>
        <Button  className={` flex gap-2 items-center `} >
          <RiFileList2Fill size={18}/>
         Extensive Fee List
        </Button>
        </Link>
        <Link href={"/payments/history"}>
        <Button className={`flex gap-2 items-center `} >
          <FaFileInvoiceDollar size={18} /> Transaction History
        </Button>
        </Link>
      </div>

      <div className="">
        <HomePageHeader title="Recent Transactions" link="See All" href="/payments/history"/>
        <TransactionListSection />
      </div>
    </section>
  );
}
