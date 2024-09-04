import { IshortDiary } from "@/types/IdiaryLanding";
import clsx from "clsx";
import moment from "moment";
import Link from "next/link";
import React from "react";

export default function DiaryEachDiary({ data }: { data: IshortDiary }) {
  return (
    <div className="flex justify-between items-center relative">
      {/* unseeen PopUp */}
{!data.isSeen&& <div className="w-3 h-3 absolute top-0 right-0 bg-primary rounded-full"></div>}

      <div className={clsx("bg-secondary rounded-md p-2 w-full py-4",data.isSeen&&"!bg-transparent")}>
        <Link href={`/diary/${data._id}`}>
        <h1 className="text-lg hFont font-bold leading-tight">{data.title}</h1>
        </Link>
        <div className="flex justify-between items-end pt-3">
          <div className="flex  gap-2">
            {data.tags.map((e) => (
              <div
                className="p-1 px-2 rounded-md bg-secondary-foreground font-medium  text-xs text-primary"
                key={e}
              >
                {e}
              </div>
            ))}
          </div>

          <p className="text-xs">
            {moment(data.date).format("dddd, DD-MMMM-YYYYY")}
          </p>
        </div>
      </div>
    </div>
  );
}
