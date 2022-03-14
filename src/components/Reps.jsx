import React, { useState, useEffect } from "react";
import axios from "axios";

const Reps = () => {
  let [reps, setReps] = useState([]);
  let [name, setName] = useState("");
  let [url, setUrl] = useState(localStorage.getItem("data") || "");
  const getData = async () => {
    const user = localStorage.getItem("search");

    const { data } = await axios.get(`https://api.github.com/users/${user}`);

    localStorage.setItem("data", data.name);

    const respos = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    localStorage.setItem("reps", respos);
    setUrl(data);

    setReps(respos.data);
    console.log(localStorage.getItem("reps"));
  };
  useEffect(async () => {
    await getData();
    console.log(url);

    const fullname = url;
    let name = fullname.split(" ");
    setName(name);
  }, []);

  return (
    <div className="repsContainer">
      <h1 className="repTitle">Repositórios de {name[0]}</h1>

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

export default Reps;
