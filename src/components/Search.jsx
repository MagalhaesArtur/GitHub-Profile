import React, { useState, useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../contexts/ApiContext";

const Search = ({ handleSearch, search }) => {
  const navigate = useNavigate();
  let [searchLocal, setSearchLocal] = useState("");

  const handleFormSubmit = (e) => {
    handleSearch(searchLocal);
    console.log(searchLocal, search);
    e.preventDefault();

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  const handleChangeInput = (e) => {
    setSearchLocal(e.target.value);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>See Your GitHub Profile</h1>
        <p>Input your user name</p>
      </div>

      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="input"
          onChange={handleChangeInput}
          value={searchLocal}
          type="text"
        />
        <button type="submit" className="btn">
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
};

export default Search;
