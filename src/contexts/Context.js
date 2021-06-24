import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [activeTab, setActiveTab] = useState("All");

  const values = {
    activeTab,
    setActiveTab,
  };

  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export default ContextProvider;
