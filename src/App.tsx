import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WordListContainer from "./containers/WordListContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <WordListContainer></WordListContainer>
    </div>
  );
};

export default App;
