import React from "react";
import useWordList from "../hooks/useWordList";

function WordListContainer() {
  const list = useWordList();

  return (
    <div>
      {list.map(data => (
        <>
          <h2>{data.id}</h2>
          <h3>{data.title}</h3>
        </>
      ))}
    </div>
  );
}

export default WordListContainer;
