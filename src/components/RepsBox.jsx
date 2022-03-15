import React from "react";

const SeachBox = ({ reps }) => {
  return (
    <div className="repsContainer">
      <h1 className="repTitle">
        Repositórios de {localStorage.getItem("search")}
      </h1>

      {reps.map((item) => (
        <div className="itemContainer">
          <h2>{item.name}</h2>
          <p>{item?.description}</p>
          <a target={"_blank"} href={`${item.html_url}`}>
            Visitar Repositório
          </a>
        </div>
      ))}
    </div>
  );
};

export default SeachBox;
