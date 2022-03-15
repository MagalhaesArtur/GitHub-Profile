import React from "react";

const ProfileBox = ({ url, handleRepClick }) => {
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

export default ProfileBox;
