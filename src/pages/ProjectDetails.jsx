import { useState, useEffect, useRef } from "react";

import sampleImage from "../assets/sample.jpg";

import "../scss/pages/ProjectDetails.scss";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const ProjectDetails = (props) => {
  const data = [...MusicProductionData, ...TechProjectsData];
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".imgContainer:after");

  const tl = new TimelineLite();

  useEffect(() => {
    // This removes flashing of image
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: " 0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });

  return (
    <section className="projectDetails">
      {data.map((d) => {
        if (d.id.toString() === props.match.params.id) {
          return (
            <div>
              <h1>{d.title}</h1>

              <div
                ref={(el) => (container = el)}
                className="projectContainer"
                key={d.id}
              >
                <div className="imgContainer">
                  <img ref={(el) => (image = el)} src={sampleImage} alt="" />
                </div>

                {/*  <div className="title">
                <h1>{d.title}</h1>
              </div>

              <section className="images">
                <div className="rowLayout">
                  <h2>summary</h2>
                  <p>{d.summary}</p>
                </div>

                <div className="columnLayout">
                  <h2>Ipsum</h2>
                
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
              </section> */}
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default ProjectDetails;
