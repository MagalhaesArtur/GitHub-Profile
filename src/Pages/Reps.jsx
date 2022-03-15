import React, { useState, useEffect } from "react";
import axios from "axios";
import RepsBox from "../components/RepsBox";

const Reps = () => {
  let [reps, setReps] = useState([]);
  let [localName, setLocalName] = useState(localStorage.getItem("name"));
  let [url, setUrl] = useState(localStorage.getItem("data") || "");
  const getData = async () => {
    const user = await localStorage.getItem("search");

    const { data } = await axios.get(`https://api.github.com/users/${user}`);

    localStorage.setItem("data", data);

    const respos = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    localStorage.setItem("reps", respos);
    setUrl(data);

    setReps(respos.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <RepsBox reps={reps} />;
};

export default Reps;
