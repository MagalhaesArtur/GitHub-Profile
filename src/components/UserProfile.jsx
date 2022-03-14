import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import { useNavigate, useOutlet } from "react-router-dom";

const UserProfile = ({ setLoading }) => {
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
  return (
    <div className="profileContainer">
      <div className="imgContainer">
        <img className="avatar" src={`${url.avatar_url}`} alt="" />{" "}
      </div>
      <h2 className="userName">{url.name}</h2>
      <div className="bio">
        <p>{url?.bio}</p>
      </div>
      <div className="details">
        <div className="reps" onClick={handleRepClick}>
          {url.public_repos} <h3>Repositórios</h3>
        </div>
        <div className="followers">
          {url.followers}
          <h3>Seguidores</h3>
        </div>
        <div className="following">
          {url.following}
          <h3>Seguindo</h3>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
