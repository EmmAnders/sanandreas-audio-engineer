import "../scss/pages/ProjectDetails.scss";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

const ProjectDetails = (props) => {
  const data = [...MusicProductionData, ...TechProjectsData];
  const { projectId } = props.match.params;

  return (
    <div>
      {data.map((data) => {
        if (data.id === projectId) {
          return <div>{data.title}</div>;
        }
      })}
    </div>
  );
};

export default ProjectDetails;
