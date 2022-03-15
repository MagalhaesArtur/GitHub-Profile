import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileBox from "../components/ProfileBox";

const UserProfile = () => {
  let [url, setUrl] = useState("");
  const navigate = useNavigate();

  let [reps, setReps] = useState("");

  const getData = async () => {
    const user = await localStorage.getItem("search");
    const { data } = await axios.get(`https://api.github.com/users/${user}`);

    const { respos } = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    setUrl(data);
    setReps(respos);
  };
  useEffect(async () => {
    await getData();
  }, []);

  const handleRepClick = () => {
    setTimeout(() => {
      navigate("/reps");
    }, 1000);
  };
  return <ProfileBox url={url} handleRepClick={handleRepClick} />;
};

export default UserProfile;
