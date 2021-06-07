import { useState, useEffect } from "react";

import sampleImage from "../assets/sampletwo.png";

import "../scss/pages/ProjectDetails.scss";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation";

let images = [
  {
    src: "https://unsplash.com/photos/jUwvjOmCTWc",
    title: "Test",
    subtitle: "subtitle ",
  },
  {
    src: "https://unsplash.com/photos/xTI9YZfbXQc",
    title: "Test 2",
    subtitle: "subtitle ",
  },

  {
    src: "https://unsplash.com/photos/xTI9YZfbXQc",
    title: "Test 3",
    subtitle: "subtitle ",
  },

  {
    src: "https://unsplash.com/photos/u0BVH8IOTUk",
    title: "Test 4",
    subtitle: "subtitle ",
  },

  {
    src: "https://unsplash.com/photos/ehZ9Aeu2Elo",
    title: "Test 5",
    subtitle: "subtitle ",
  },
];

const ProjectDetails = (props) => {
  const data = [...MusicProductionData, ...TechProjectsData];

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
    </motion.section>
  );
};

export default ProjectDetails;
