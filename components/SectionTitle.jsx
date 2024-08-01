import React from "react";

export default function SectionTitle({ title }) {
  return (
    <div
      id={title.toLowerCase() || title}
      className="bg-accent h-10 text-3xl flex flex-row justify-between items-center p-2 px-5 font-black mt-7 mb-4 col-span-full"
    >
      {title.split("").map((lettr, index) => (
        <h2 key={index} className="opacity-50">
          {lettr}
        </h2>
      ))}
    </div>
  );
}
