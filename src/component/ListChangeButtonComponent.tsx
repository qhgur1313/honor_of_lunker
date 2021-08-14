import React from "react";
import ButtonComponent from "../widget/ButtonComponent";
import "../style/ListComponent.scss";

function ListChangeButtonComponent(): JSX.Element {
  const sortBehavior: string[] = ["시간순", "이름순", "크기순", "장소순"];

  return (
    <div className="d-list">
      {sortBehavior.map((i) => (
        <ButtonComponent input={i} key={i} />
      ))}
    </div>
  );
}

export default ListChangeButtonComponent;
