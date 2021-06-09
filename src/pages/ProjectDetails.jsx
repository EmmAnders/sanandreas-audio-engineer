import { useState, useEffect } from "react";

import sampleImage from "../assets/sampletwo.png";

import "../scss/pages/ProjectDetails.scss";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

const ProjectDetails = (props) => {
  const data = [...MusicProductionData, ...TechProjectsData];

  return (
    <section className="projectDetails">
      {data.map((d) => {
        if (d.id.toString() === props.match.params.id) {
          return (
            <div key={d.id}>
              <div className="title">
                <h1>{d.title}</h1>
              </div>

              <section className="images">
                <div className="rowLayout">
                  <h2>summary</h2>
                  <p>{d.summary}</p>
                </div>

                <div className="columnLayout">
                  <h2>Ipsum</h2>
                  <img src={sampleImage} alt="" />
                </div>
              </section>

              <section className="about">
                <h3>About</h3>
                <p>{d.body}</p>
              </section>

              <section className="video">
                <iframe
                  width="100%"
                  height="700px"
                  src={d.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </section>
            </div>
          );
        }
      })}
    </section>
  );
};

export default ProjectDetails;
