"use client";
import CustomSelectBar from "@/components/global/custom-select-bar";
import { useAppDispatch, useAppSelector } from "@/context/redux-hook";
import { RedfrInsertFilters } from "@/context/Slices/fee-records-slice";
import useFetchRecordsFilters from "@/hooks/payments/useFetchRecordFilters";
import useFetchRecords from "@/hooks/payments/useFetchRecords";
import { useEffect } from "react";

export default function RecordsFilterBar() {
  const {mutate} = useFetchRecords()
  const { isLoading } = useFetchRecordsFilters();
  const dispatch = useAppDispatch();
  const { available, selected } = useAppSelector((s) => s.feeRecords.filters);
  
  const onChangeYear = (year: string) => {
    dispatch(
      RedfrInsertFilters({
        type: "selected",
        year,
        feeType: Object.keys(available.feeTypes[year])[0],
      })
    );
  }
  const onChangeFeeType = (feeType: string) => dispatch(RedfrInsertFilters({ type: "selected", feeType }));
  useEffect(() => {
    if(selected.feeType) mutate({year:selected.year,feeType:available.feeTypes[selected.year][selected.feeType]})
  }, [selected.feeType,mutate,selected.year,available.feeTypes])
  if (isLoading) return null;
  return (
    <div className="flex space-x-4 p-4  rounded-md shadow-sm mb-2">
      {/* Year Filter */}
      <div className="w-full max-w-xs">
        <CustomSelectBar
          data={available.years}
          value={selected.year}
          onChange={onChangeYear}
          placeholder="Select year"
        />
      </div>

      {/* Fee Type Filter */}
      <div className="w-full max-w-xs">
        <CustomSelectBar
          data={Object?.keys(available?.feeTypes[selected.year]) || []}
          value={selected.feeType}
          onChange={onChangeFeeType}
          placeholder="Select feeType"
        />
      </div>
    </div>
  );
}
