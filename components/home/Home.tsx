import React from "react";
import HomeItem from "./HomeItem";
import Content from "./ContentInterface";

interface Props {
  data: Content[];
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item, index) =>
        item.title || item.image ? <HomeItem key={index} item={item} /> : null
      )}
    </>
  );
};

export default Home;
