import React from "react";
import titleimage from "./Titleimage.png";

function TitleComponent(): JSX.Element {
  const name = "스너퍼 런커의 전당";
  return (
    <div
      style={{
        backgroundColor: "#fff3d9",
        display: "flex",
        width: "100%",
        paddingLeft: "20px",
      }}
    >
      <a
        href="localhost:3000"
        style={{
          fontSize: "100px",
          color: "#000000",
          textDecorationLine: "none",
          paddingTop: "10px",
        }}
      >
        {" "}
        <b>{name}</b>{" "}
      </a>
      <img
        src={titleimage}
        alt="titleimage"
        style={{
          width: "auto",
          height: "100px",
          marginLeft: "auto",
          paddingRight: "50px",
          paddingTop: "20px",
        }}
      />
    </div>
  );
}

export default TitleComponent;
