import { useState, useEffect } from "react";

import sampleImage from "../assets/sampletwo.png";

import "../scss/pages/ProjectDetails.scss";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

import { motion } from "framer-motion";

import {
  pageAnimation,
  fade,
  scrollReveal,
  photoAnim,
  titleAnim,
  slider,
  sentence,
} from "../components/PageAnimation";
import { useScroll } from "../hooks/useScroll";

const ProjectDetails = (props) => {
  const data = [...MusicProductionData, ...TechProjectsData];
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();

  return (
    <motion.section
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="projectDetails"
    >
      {data.map((d) => {
        if (d.id.toString() === props.match.params.id) {
          return (
            <div key={d.id}>
              <motion.div
                variants={fade}
                animate={controls5}
                initial="hidden"
                ref={element5}
                className="title"
              >
                <h1>{d.title}</h1>
              </motion.div>

              <section className="images">
                <motion.div
                  variants={fade}
                  animate={controls}
                  initial="hidden"
                  ref={element}
                  className="rowLayout"
                >
                  <h2>summary</h2>
                  <p>{d.summary}</p>
                </motion.div>

                <motion.div
                  variants={slider}
                  animate={controls2}
                  initial="hidden"
                  ref={element2}
                  className="columnLayout"
                >
                  <h2>Ipsum</h2>
                  <img src={sampleImage} alt="" />
                </motion.div>
              </section>

              <motion.section
                variants={fade}
                animate={controls3}
                initial="hidden"
                ref={element3}
                className="about"
              >
                <h3>About</h3>
                <p>{d.body}</p>
              </motion.section>

              <motion.section
                variants={fade}
                animate={controls4}
                initial="hidden"
                ref={element4}
                className="video"
              >
                <iframe
                  width="100%"
                  height="700px"
                  src={d.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </motion.section>
            </div>
          );
        }
      })}
    </motion.section>
  );
};

export default ProjectDetails;
