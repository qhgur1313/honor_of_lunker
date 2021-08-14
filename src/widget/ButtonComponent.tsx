import React from "react";
import "../style/ButtonComponent.scss";

interface Props {
  input: string;
}

function ButtonComponent(props: Props): JSX.Element {
  const { input } = props;

  return (
    <button type="button" className="w-button">
      {" "}
      {input}{" "}
    </button>
  );
}

export default ButtonComponent;
