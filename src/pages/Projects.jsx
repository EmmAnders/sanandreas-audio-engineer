import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/MusicProductionData";
import { Tabs, Tab } from "../components/Tabs";
import "../scss/pages/Projects.scss";

const Projects = () => {
  return (
    <main className="main">
      <Tabs>
        <Tab label={"All"} tabName={"ALL"}>
          <p>All</p>
        </Tab>
        <Tab label={"Tech Projects"} tabName={"TECH PROJECTS"}>
          <p>TECH PROJECTS</p>
        </Tab>

        <Tab label={"Music Production"} tabName={"MUSIC PRODUCTION"}>
          <p>MUSIC PRODUCTION</p>
        </Tab>
      </Tabs>
    </main>
  );
};

export default Projects;
