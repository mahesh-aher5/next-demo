import React from "react";
import Home from "./Home";
export default function HomeSection({data}: any) {
  return (
    <article className="container mx-auto max-w-[1237px] lg:pt-16 sm:pt-0">
      <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[7.5rem] dark:text-white">
        LOREM IPSUM
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-12">
        <Home data={data} />
      </div>
    </article>
  );
}
