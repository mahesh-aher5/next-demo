import Image from "next/image";
import React from "react";
import { Images } from "../../utils/constant/staticImage";

export default function About() {
  return (
    <section>
      <article className="absolute w-[100%] h-[450px] backgroundCoverImage">
        <Image
          alt="background-cover-image"
          src={Images.groupUser}
          layout="fill"
          objectFit="cover"
        />
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 transition-all h-[25rem] items-center">
        <div className="relative h-[25rem]">
          <h1 className="mb-4 font-bold tracking-tight leading-none text-[7.5rem] text-white uppercase">
            about <br />
            us
          </h1>
          <div className="absolute top-[6.5rem] left-[13rem] w-[334px] h-[334px] hover:hidden backgroundRectangleImage">
            <Image
              alt="round-image"
              className="rounded-full"
              src={Images.circleGroup}
              layout="fill"
            />
          </div>
        </div>
        <p className="leading-8 text-[#FFFFFF] opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </section>
  );
}
