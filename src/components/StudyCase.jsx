import React from "react";
import { useParams } from "react-router-dom";
import data from "../pages/Works/data";

const StudyCase = () => {
    const { path } = useParams();
  const currentCase = data.find((page) => page.path === path);

  return (
    <div className="container">
      <h1 className="text2">{currentCase.company}</h1>
      <br />
      <p className="text">{currentCase.title}</p>
      <br />
      <p className="text">{currentCase.description}</p>
    </div>
  );
};

export default StudyCase;