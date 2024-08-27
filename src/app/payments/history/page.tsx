import TransactionHistoryComponent from "@/components/payments/history/transaction-history-component";
import TransactionHistoryHeader from "@/components/payments/history/transaction-history-header";

export default function PaymentHistoryPage() {
  return (
    <div className="max-w-4xl mx-auto py-2">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      <div className="flex flex-col  ">
        <TransactionHistoryHeader />
        <TransactionHistoryComponent />
      </div>
    </div>
  );
}
