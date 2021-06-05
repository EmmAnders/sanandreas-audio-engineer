import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";
import { Tabs, Tab } from "../components/Tabs";
import "../scss/pages/Projects.scss";

const Projects = () => {
  return (
    <main className="main">
      <Tabs>
        <Tab label={"All"} tabName={"ALL"}>
          <div>
            {TechProjectsData.map((data, i) => {
              return (
                <div key={data.id}>
                  <h2>{data.title}</h2>
                  <p>{data.descShort}</p>
                </div>
              );
            })}

            {MusicProductionData.map((data, i) => {
              return (
                <div key={data.id}>
                  <p>{data.title}</p>
                </div>
              );
            })}
          </div>
        </Tab>
        <Tab label={"Tech Projects"} tabName={"TECH PROJECTS"}>
          {TechProjectsData.map((data, i) => {
            return (
              <div key={data.id}>
                <h2>{data.title}</h2>
                <p>{data.descShort}</p>
              </div>
            );
          })}
        </Tab>

        <Tab label={"Music Production"} tabName={"MUSIC PRODUCTION"}>
          {MusicProductionData.map((data, i) => {
            return (
              <div key={data.id}>
                <p>{data.title}</p>
              </div>
            );
          })}
        </Tab>
      </Tabs>
    </main>
  );
};

export default Projects;
