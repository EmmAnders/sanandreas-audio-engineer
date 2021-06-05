import { useState, useEffect } from "react";

import "../scss/pages/ProjectDetails.scss";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

const ProjectDetails = (props) => {
  const data = [...MusicProductionData, ...TechProjectsData];

  return (
    <div>
      {data.map((d) => {
        if (d.id.toString() === props.match.params.id) {
          return <div key={d.id}>{d.title}</div>;
        }
      })}
    </div>
  );
};

export default ProjectDetails;
