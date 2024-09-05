import ClassBasicInfo from "@/components/home/Class/class-basic-info";
import HomeDiaryList from "@/components/home/Diary/home-diary-list";
import HomePageHeader from "@/components/home/home-page-header";
import Quote from "@/components/home/Quote/quote";
import TransactionListSection from "@/components/home/Transactions/transaction-list";
import * as React from "react"

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <section>
      <HomePageHeader title='Today diary' link="Details" href="/diary"/>
      <HomeDiaryList/>
        </section>
      <section>
        <HomePageHeader title='Payment History' link="See All" href="/payments/history" />
        <TransactionListSection/>
      </section>
      <section>
      <HomePageHeader title='Class Details'/>
        <ClassBasicInfo/>
        </section>
        <Quote/>
        </section>
  );
}


