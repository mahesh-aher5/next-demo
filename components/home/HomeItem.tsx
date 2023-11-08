import Image from 'next/image';
import React from 'react';
import Content from './ContentInterface';

interface Props {
  item: Content;
}

const HomeItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="mb-8 mt-15 md:my-0">
      {item.image && (
        <Image
          alt="user-image"
          src={item.image}
          width={500}
          height={500}
          className="mr-2 mb-10 mt-5"
        />
      )}
      {item.title && (
        <h1 className="font-bold text-[1.5rem] lg:leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase mt-5">
          {item.title}
        </h1>
      )}
      <p className="leading-8 text-[#FFFFFF] opacity-70">{item.desc}</p>
      {item.icon && (
        <div className="mt-5">
          <Image
            alt="server-icon"
            src={item.icon}
            width={20}
            height={20}
            className="mr-2"
          />
        </div>
      )}
    </div>
  );
}

export default HomeItem;
