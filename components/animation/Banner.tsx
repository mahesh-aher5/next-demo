import Image from "next/image";
import React from "react";
import { Images } from "../../utils/constant/staticImage";

export default function Banner() {
  const bannerRotate = [1, 2, 3, 4];
  return (
    <div className="relative h-[50px] overflow-hidden flex">
      <Image src={Images.banner} alt="Background Image" layout="fill" />
      <div className="flex text-white items-center">
        {bannerRotate.map((_, index) => (
          <div className="animate-marquee whitespace-nowrap" key={index}>
            {bannerRotate.map((_, index2) => (
              <span
                className="text-[1.2rem] font-bold uppercase mx-4"
                key={index2}
              >
                Lorem Ipsum
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
