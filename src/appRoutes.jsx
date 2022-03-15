import React from "react";

import Reps from "./Pages/Reps";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import UserProfile from "./Pages/UserProfile";

const AppRoutes = ({ handleSearch, search }) => {
  return (
    <Router>
      <main className="main">
        <Routes>
          <Route
            path="/"
            exact
            element={<Search handleSearch={handleSearch} search={search} />}
          />
          <Route path="/profile" exact element={<UserProfile />} />
          <Route path="/reps" exact element={<Reps />} />
        </Routes>
      </main>
    </Router>
  );
};

export default AppRoutes;
