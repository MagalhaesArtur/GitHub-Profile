import React, { useState, createContext } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const onHandleFormSubmit = (search) => {
    setSearch(search);
  };
  return (
    <ApiContext.Provider value={{ search, onHandleFormSubmit }}>
      {children}
    </ApiContext.Provider>
  );
};
