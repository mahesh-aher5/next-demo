import Image from 'next/image'
import React, { useState } from 'react'
import { Icon, Images } from '../../utils/constant/staticImage';
import { data } from '@/utils/constant/accordianContent';

export default function Accordion() {
    const [tab, setTab] = useState(0);

  return (
    <footer className="lg:mt-[4rem] lg:pb-[17rem]">
        {data.map((item, index) => (
          <section key={index} >
            <article className="rounded p-2 pb-2 ">
              <div className="relative h-[45px] cursor-pointer" onClick={() =>{tab === index ? setTab(-1) :setTab(index)}}>
                {tab === index && (
                  <Image src={Images.banner} alt="background-image" layout="fill" />
                )}
                <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
                  <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem] font-medium">
                    {item.name}
                  </p>
                  <button className="text-left text-white font-semibold focus:outline-none">
                    <Image alt="plus-icon" src={tab === index ? Icon.plus : Icon.minus} />
                  </button>
                </div>
              </div>

              {tab === index && (
                <p className="container mx-auto max-w-[1237px] px-5  leading-7 mt-5 text-[#a1a1a1]">
                  {item.content}
                </p>
              )}
            </article>
          </section>
        ))}
      </footer>
  )
}
