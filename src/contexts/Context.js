import { createContext, useEffect, useState } from "react";
import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData.js";

export const Context = createContext();

const ContextProvider = (props) => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects([...TechProjectsData, ...MusicProductionData]);
  }, []);

  const [activeTab, setActiveTab] = useState("Tech Projects");

  const values = {
    activeTab,
    setActiveTab,
    projects,
  };

  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export default ContextProvider;
