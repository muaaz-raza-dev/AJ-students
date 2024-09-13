import fetchDiary from "@/api/Diary/fetch-diary.api";
import DiaryDImageBar from "@/components/diary/Detailed/diary-d-image-bar";
import moment from "moment";
import React from "react";
import "react-quill/dist/quill.snow.css";
export default async function EachDiaryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // params
  const response = await fetchDiary(id);
  if (response.error) {
    console.error("Failed to fetch diary", response.error);
    return null;
  }
  const { date, content, title, images, tags } = response.payload;
  return (
    <main className="">
      <h1 className="text-3xl font-bold hFont pb-2 text-gray-800 antialiased">
        {title}
      </h1>
      <div className="bg-primary text-center font-semibold hFont mb-2 px-4 py-1 rounded-md ">
        {moment(date).format("dddd, DD-MMMM-YYYY")}
      </div>
      <div className="flex gap-1">
        <DiaryDImageBar images={images} />
      </div>
      <p
        className="py-2 border-b-2 "
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>

      <div className="flex flex-col gap-2 pt-2">
        <h1 className="hFont  font-semibold ">Tags</h1>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag: string) => (
            <div
              key={tag}
              className="bg-secondary text-sm border-primary border font-semibold px-2 py-1 rounded-md"
            >
              tag
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
