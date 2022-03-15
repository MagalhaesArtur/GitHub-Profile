import "./App.css";

import React, { useEffect, useState } from "react";

import AppRoutes from "./appRoutes";

function App() {
  let [search, setSearch] = useState(localStorage.getItem("search"));

  const handleSearch = async (data) => {
    setSearch(data);
  };

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  return <AppRoutes handleSearch={handleSearch} search={search} />;
}

export default App;
