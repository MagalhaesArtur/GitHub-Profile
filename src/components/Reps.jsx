import React, { useState, useEffect } from "react";
import axios from "axios";

const Reps = () => {
  let [reps, setReps] = useState([]);
  let [url, setUrl] = useState("");
  const getData = async () => {
    const user = localStorage.getItem("search");

    const { data } = await axios.get(`https://api.github.com/users/${user}`);

    const respos = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    setUrl(data);

    setReps(respos.data);
    console.log(respos.data);
  };
  useEffect(async () => {
    await getData();
  }, []);

  return (
    <div className="profileContainer">
      <h1 className="repTitle">Repositórios de {url.name.split(" ")[0]}</h1>
      {reps.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default Reps;
