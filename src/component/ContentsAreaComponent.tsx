import React from "react";
import { observer } from "mobx-react";
import ContentComponent from "./ContentComponent";
import "../style/ContentsAreaComponent.scss";

interface imgInfo {
  img: string;
  date: number;
  name: string;
  site: string;
  size: number;
}

const ContentsAreaComponent = () => {
  const imgList: imgInfo[] = [
    {
      img: "/img/이보혁52200412영산강.jpg",
      date: 200412,
      name: "이보혁",
      site: "영산강",
      size: 52,
    },
    {
      img: "/img/이시도53210620전라도.jpeg",
      date: 210620,
      name: "이시도",
      site: "전라도",
      size: 53,
    },
    {
      img: "/img/이시도56200614용설저수지.jpeg",
      date: 200614,
      name: "이시도",
      site: "용설저수지",
      size: 56,
    },
  ];

  return (
    <div className="a-area" style={{}}>
      {imgList.map((a) => (
        <ContentComponent
          key={a.date}
          img={a.img}
          date={a.date}
          name={a.name}
          site={a.site}
          size={a.size}
        />
      ))}
    </div>
  );
};

export default observer(ContentsAreaComponent);
