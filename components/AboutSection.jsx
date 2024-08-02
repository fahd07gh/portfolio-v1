import React from "react";

export default function AboutSection({ title, data }) {
  return (
    <div className="my-5">
      <h2 className="px-2 bg-accent text-2xl font-bold w-fit rounded-md mb-3">
        {title}
      </h2>
      <div className="flex flex-row flex-wrap gap-2 px-2">
        {data.map((skill, index) => (
          <div
            key={skill + "-" + index}
            className="bg-secondary p-2 rounded-lg "
          >
            <h3 className="text-base font-bold">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
