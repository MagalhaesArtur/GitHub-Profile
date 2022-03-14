import "./App.css";

import React, { useEffect, useState } from "react";
import { ApiProvider } from "./contexts/ApiContext";

import Reps from "./components/Reps";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";

function App() {
  let [search, setSearch] = useState(localStorage.getItem("search"));
  let [loading, setLoading] = useState(true);

  const handleSearch = async (data) => {
    setSearch(data);
    console.log(data);
  };
  useEffect(() => {
    console.log(search);

    localStorage.setItem("search", search);

    console.log(localStorage.getItem("search"));
  }, [search]);

  return (
    <Router>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Search handleSearch={handleSearch} search={search} />}
          />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/reps" exact element={<Reps />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
