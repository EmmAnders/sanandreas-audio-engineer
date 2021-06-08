import { useHistory } from "react-router-dom";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation";

import { Tabs, Tab } from "../components/Tabs";
import Card from "../components/Card";

import "../scss/pages/Projects.scss";

const Projects = () => {
  const history = useHistory();

  const handleClickToProjectId = (id) => {
    history.push(`/projects/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.main
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="projects"
    >
      <Tabs>
        <Tab label={"All"} tabName={"ALL"}>
          <div className="wrapper">
            {TechProjectsData.map((data, i) => {
              return (
                <Card
                  onClick={() => handleClickToProjectId(data.id)}
                  key={data.id}
                  className="item"
                  image={data.image}
                  title={data.title.toUpperCase()}
                  desc={data.descShort}
                ></Card>
              );
            })}

            {MusicProductionData.map((data, i) => {
              return (
                <Card
                  onClick={() => handleClickToProjectId(data.id)}
                  className="item"
                  key={data.id}
                  title={data.title.toUpperCase()}
                ></Card>
              );
            })}
          </div>
        </Tab>

        <Tab label={"Tech Projects"} tabName={"TECH PROJECTS"}>
          <div className="wrapper">
            {TechProjectsData.map((data, i) => {
              return (
                <Card
                  onClick={() => handleClickToProjectId(data.id)}
                  className={"item"}
                  key={data.id}
                  title={data.title.toUpperCase()}
                  desc={data.descShort}
                ></Card>
              );
            })}
          </div>
        </Tab>

        <Tab label={"Music Production"} tabName={"MUSIC PRODUCTION"}>
          <div className="wrapper">
            {MusicProductionData.map((data, i) => {
              return (
                <Card
                  onClick={() => handleClickToProjectId(data.id)}
                  className={"item"}
                  key={data.id}
                  title={data.title.toUpperCase()}
                ></Card>
              );
            })}
          </div>
        </Tab>
      </Tabs>
    </motion.main>
  );
};

export default Projects;
