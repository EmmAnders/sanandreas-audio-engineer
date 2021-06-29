import React, { useRef, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { MusicProductionData } from "../data/MusicProductionData";
import { Context } from "../contexts/Context";

import "../scss/pages/Project.scss";
import sample from "../assets/sample.jpg";

import { gsap, timeline } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../scss/locomotive-scroll.css";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const Project = (props) => {
  const { projects } = useContext(Context);

  let container = useRef(null);
  const revealContent = useRef(null);
  revealContent.current = [];

  const addToRefs = (el) => {
    if (el && !revealContent.current.includes(el)) {
      revealContent.current.push(el);
    }
  };

  let { title } = useParams();

  console.log(title);

  useEffect(() => {
    revealContent.current.forEach((el, index) => {
      let exptl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          /*        start: "top bottom",  */
          end: () => `+=${el.offsetHeight}`,
          scrub: 3,
          scroller: container.current,
        },
      });

      exptl.from(el, {
        y: 100,
        opacity: 0,
        duration: 1,
      });
    });
  }, []);

  return (
    <div className="project">
      {projects &&
        projects.map((p) => {
          if (p.title == title) {
            return (
              <div key={p.id}>
                <section className="title">
                  <h1 ref={addToRefs}>{p.title}</h1>
                </section>

                <section className="section-1">
                  <div ref={addToRefs} className="rowLayout">
                    <h2>Summary</h2>
                    <p>{p.summary}</p>
                  </div>

                  <div className="columnLayout">
                    <h2>{p.year}</h2>
                    <div className="img-container">
                      <img ref={addToRefs} src={sample} alt="" />
                    </div>
                  </div>
                </section>

                <section className="section-2">
                  <div className="container">
                    <div className="img-container-1">
                      <img ref={addToRefs} src={sample} alt="" />
                    </div>

                    <div className="img-container-2">
                      <img ref={addToRefs} src={sample} alt="" />
                    </div>
                  </div>
                </section>

                {p.body && (
                  <div ref={addToRefs} className="section-3">
                    <div className="inner">
                      <h3>About</h3>
                      <p>{p.body}</p>
                    </div>
                  </div>
                )}

                {p.video && (
                  <div className="section-4">
                    <div className="inner">
                      <iframe
                        ref={addToRefs}
                        src={p.video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        height="315"
                        width="560"
                      ></iframe>
                    </div>
                  </div>
                )}

                {p.github && (
                  <div className="section-5">
                    <p>
                      View Project on <a href={p.github}>Github</a>
                    </p>
                  </div>
                )}
              </div>
            );
          }
        })}
    </div>
  );
};

export default Project;
