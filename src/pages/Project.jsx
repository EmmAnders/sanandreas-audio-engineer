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

      exptl.from(el, 0.8, {
        delay: 0.5,
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
  }, [revealContent.current]);

  console.log("addToRef", revealContent.current);
  return (
    <div className="project-page">
      {projects &&
        projects.map((p) => {
          if (p.title.replace(/\s+/g, "-").toLowerCase() === title) {
            return (
              <div key={p.id}>
                <section ref={heading} className="title">
                  <h1>{p.title}</h1>
                </section>

                {/*     {p.image && ( */}
                <>
                  <section className="section-1">
                    <div className="rowLayout">
                      {p.summary && (
                        <>
                          <h2 ref={addToRefs}>Overview</h2>
                          <p ref={addToRefs}>{p.summary}</p>
                        </>
                      )}
                    </div>

                    <div className="columnLayout">
                      <h2 ref={addToRefs}>{p.year}</h2>
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
                    <div className="container">
                      <iframe
                        className="video-player"
                        ref={addToRefs}
                        src={p.video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        height="100%"
                        width="100%"
                      ></iframe>
                    </div>
                  </div>
                )}

                {p.github && (
                  <div className="section-5">
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
