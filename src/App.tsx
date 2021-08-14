import React from "react";
import TitleComponent from "./component/TitleComponent";
import ListChangeButtonComponent from "./component/ListChangeButtonComponent";
import ContentsAreaComponent from "./component/ContentsAreaComponent";
import "./style/App.scss";

function App(): JSX.Element {
  return (
    <div className="a-app">
      <TitleComponent />
      <ListChangeButtonComponent />
      <ContentsAreaComponent />
    </div>
  );
}

export default App;
