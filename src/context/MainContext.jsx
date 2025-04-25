import React, { createContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  
  const functions = {
  };

  return (
    <MainContext.Provider value={functions}>{children}</MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
