"use client";
import { useAppDispatch, useAppSelector } from "@/context/redux-hook";
import { RedthInsertFilters } from "@/context/Slices/transaction-history-slice";
import useFetchHistoryYears from "@/hooks/payments/history/useFetchHistoryYears";
import useFetchTransactionHistory from "@/hooks/payments/history/useFetchTransactionHistory";
import clsx from "clsx";
import { useEffect } from "react";

export default function TransactionHistoryHeader() {
  const {isLoading } = useFetchHistoryYears();
  const {selected,available} = useAppSelector(s=>s.transactionHistory.filters)
  const {mutate } = useFetchTransactionHistory();
  const dispatch = useAppDispatch()

  useEffect(() => {
   if(selected.year) mutate(selected.year)
  }, [selected.year, mutate])

  if (isLoading) return null;
  return (
    <div className="flex  gap-2">
      {available.years.map((year) => (
        <div className="flex flex-col items-center" key={year}>
          <button
            onClick={() => dispatch(RedthInsertFilters({type:"selected",year}))}
            className={clsx(
              ` bg-secondary px-5 py-1 rounded-md  font-bold   mb-2`,
                year == selected.year && "!bg-primary scale-95"
            )}
          >
            {year}
          </button>
        </div>
      ))}
    </div>
  );
}
