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
              <h1>{d.title}</h1>

              <section className="images">
                <div>
                  <img src={sampleImage} alt="" />
                </div>
                <div>
                  <img src={sampleImage} alt="" />
                </div>
                <div>
                  <img src={sampleImage} alt="" />
                </div>
              </section>

              <section className="overview">
                <div>
                  <h2>TOOLS</h2>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>

                <div>
                  <h2>TOOLS</h2>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>

                <div>
                  <h2>TOOLS</h2>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </section>

              <section className="video">
                <iframe
                  width="100%"
                  height="315"
                  src={d.embed}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <section className="body">
                  <p>{d.body}</p>
                </section>
              </section>
            </div>
          );
        }
      })}
    </section>
  );
};

export default ProjectDetails;
