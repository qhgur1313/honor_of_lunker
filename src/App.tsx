import React from 'react';
import TitleComponent from './component/TitleComponent';
import ListComponent from './component/ListComponent';
import ContentsAreaComponent from './component/ContentsAreaComponent';
import './style//App.scss';

function App() {
  return (
    <div className="a-app">
      <TitleComponent></TitleComponent>
      <ListComponent></ListComponent>
      <ContentsAreaComponent></ContentsAreaComponent>
    </div>
  );
}

export default App;
