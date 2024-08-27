
import RecordsFilterBar from "@/components/payments/records/records-filterbar";
import RecordsComponent from "@/components/payments/records/records-component";
import RecordsOneTime from "@/components/payments/records/records-oneTime";

export default function FeeRecordPage() {
  return (
    <section>
      <RecordsOneTime/>
      <RecordsFilterBar/>
      <RecordsComponent/>
    </section>
  )
}
