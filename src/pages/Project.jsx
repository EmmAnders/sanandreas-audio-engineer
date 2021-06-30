import React, { useRef, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../contexts/Context";

import "../scss/pages/Project.scss";
import sample from "../assets/sample.jpg";
import arrow from "../assets/icons/corner-up-right.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const Project = (props) => {
  const { projects } = useContext(Context);
  let { title } = useParams();

  const heading = useRef(null);
  const revealContent = useRef(null);
  revealContent.current = [];

  const addToRefs = (el) => {
    if (el && !revealContent.current.includes(el)) {
      revealContent.current.push(el);
    }
  };

  useEffect(() => {
    revealContent.current.forEach((el, index) => {
      let exptl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          end: () => `+=${el.offsetHeight}`,
          scrub: 3,
        },
      });

      exptl.from(el, {
        y: 100,
        autoAlpha: 0,
        duration: 1,
      });
    });

    gsap.from(heading.current, 0.8, {
      delay: 0.5,
      y: 100,
      autoAlpha: 0,
      duration: 1,
    });
  }, [revealContent.current, heading]);

  return (
    <div className="project">
      {projects &&
        projects.map((p) => {
          if (p.title.replace(/\s+/g, "-").toLowerCase() == title) {
            return (
              <div ref={heading} className="project" key={p.id}>
                <section className="title">
                  <h1>{p.title}</h1>
                </section>

                {/*     {p.image && ( */}
                <>
                  <section className="section-1">
                    <div ref={addToRefs} className="rowLayout">
                      {p.summary && (
                        <>
                          <h2>Overview</h2>
                          <p>{p.summary}</p>
                        </>
                      )}
                    </div>

                    <div className="columnLayout">
                      <h2>{p.year}</h2>
                      <div className="img-container">
                        <img ref={addToRefs} src={sample} alt="" />
                      </div>
                    </div>
                  </section>
                  <section className="section-2">
                    <div className="img-container">
                      <div className="img-1">
                        <img ref={addToRefs} src={sample} alt="" />
                      </div>

                      <div className="img-2">
                        <img ref={addToRefs} src={sample} alt="" />
                      </div>
                    </div>
                  </section>
                </>
                {/*      )} */}

                {p.body && (
                  <div ref={addToRefs} className="section-3">
                    <div>
                      <h3>About</h3>
                      <p>{p.body}</p>
                    </div>
                  </div>
                )}

                {p.video && (
                  <div className="section-4">
                    <iframe
                      className="video-player"
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
                )}

                {p.github && (
                  <div className="section-6">
                    <img src={arrow} alt="corner-up-right-arrow" />

                    <a href={p.github}>VIEW PROJECT ON GITHUB</a>
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
