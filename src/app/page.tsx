import ClassBasicInfo from "@/components/home/Class Details/class-basic-info";
import HomePageHeader from "@/components/home/home-page-header";
import Quote from "@/components/home/Quote/quote";
import TransactionListSection from "@/components/home/Transactions/transaction-list";
import * as React from "react"

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
        <Quote/>
      <section>
        <HomePageHeader title='Payment History' link="See All" />
        <TransactionListSection/>
      </section>
      <section>
      <HomePageHeader title='Class Details'  />
        <ClassBasicInfo/>
        </section>
        </section>
  );
}


