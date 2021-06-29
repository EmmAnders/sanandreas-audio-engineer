import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";

import { Context } from "../contexts/Context";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

import { Tabs, Tab } from "../components/Tabs";
import Card from "../components/Card";
import sampleImage from "../assets/sample.jpg";
import "../scss/pages/Projects.scss";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const Projects = () => {
  const history = useHistory();
  const { activeTab } = useContext(Context);

  const revealContent = useRef(null);
  const container = useRef(null);

  revealContent.current = [];

  const addToRefs = (el) => {
    if (el && !revealContent.current.includes(el)) {
      revealContent.current.push(el);
    }
  };

  useEffect(() => {
    if (activeTab) {
      revealContent.current.forEach((el, index) => {
        gsap.set(el, { y: 100, opacity: 0 });
        ScrollTrigger.batch(el, {
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              delay: 0.4,
              stagger: { each: 0.2, grid: [1, 3] },
              overwrite: true,
            }),
          onLeave: (batch) =>
            gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              overwrite: true,
            }),
          onLeaveBack: (batch) =>
            gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
          start: "30px bottom",
          end: "+=5000px",
        });
        ScrollTrigger.refresh();
      });
    }
  }, [activeTab]);

  useEffect(() => {
    if (container.current) {
      gsap.from(container.current, {
        duration: 1,
        y: "50",
        opacity: 0,
        delay: 0.6,
      });
    }
  }, []);

  const handleClickToProjectId = (title) => {
    history.push(`/projects/${title}`);
  };

  return (
    <main ref={container} className="projects">
      <Tabs>
        <Tab label={"All"} tabName={"ALL"}>
          <div className="wrapper">
            {TechProjectsData.map((data) => {
              return (
                <div ref={addToRefs}>
                  <Card
                    src={sampleImage}
                    onClick={() => handleClickToProjectId(data.title)}
                    key={data.title}
                    className="item"
                    title={data.title.toUpperCase()}
                    desc={data.descShort}
                  ></Card>
                </div>
              );
            })}

            {MusicProductionData.map((data, i) => {
              return (
                <div ref={addToRefs}>
                  <Card
                    onClick={() => handleClickToProjectId(data.id)}
                    className="item"
                    key={data.id}
                    title={data.title.toUpperCase()}
                  ></Card>
                </div>
              );
            })}
          </div>
        </Tab>

        <Tab label={"Tech Projects"} tabName={"TECH PROJECTS"}>
          <div className="wrapper">
            {TechProjectsData.map((data, i) => {
              return (
                <div ref={addToRefs}>
                  <Card
                    onClick={() => handleClickToProjectId(data.id)}
                    className={"item"}
                    key={data.id}
                    title={data.title.toUpperCase()}
                    desc={data.descShort}
                  ></Card>
                </div>
              );
            })}
          </div>
        </Tab>

        <Tab label={"Music Production"} tabName={"MUSIC PRODUCTION"}>
          <div className="wrapper">
            {MusicProductionData.map((data, i) => {
              return (
                <div ref={addToRefs}>
                  <Card
                    onClick={() => handleClickToProjectId(data.id)}
                    className={"item"}
                    key={data.id}
                    title={data.title.toUpperCase()}
                  ></Card>
                </div>
              );
            })}
          </div>
        </Tab>
      </Tabs>
    </main>
  );
};

export default Projects;
