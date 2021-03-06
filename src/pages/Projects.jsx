import { useHistory } from "react-router-dom";
import { useEffect, useRef, useContext } from "react";
import { Context } from "../contexts/Context";

// Data
import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

// Components
import { Tabs, Tab } from "../components/Tabs";
import Card from "../components/Card";

// Css
import "../scss/pages/Projects.scss";

//Animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const Projects = () => {
  const history = useHistory();
  const { activeTab } = useContext(Context);

  const revealContent = useRef(null);
  const tabs = useRef(null);

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
              stagger: { each: 0.3, grid: [1, 3] },
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
    gsap.from(tabs.current, 0.5, {
      delay: 0.3,
      y: 100,
      autoAlpha: 0,
      duration: 1,
    });
  });

  const handleClickToProjectId = (title) => {
    let title1 = title.replace(/\s+/g, "-").toLowerCase();
    history.push(`/work/${title1}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="projects">
      <Tabs>
        <Tab label={"Tech Projects"} tabName={"TECH PROJECTS"}>
          <div className="wrapper">
            {TechProjectsData.map((data, i) => {
              return (
                <div key={i} ref={addToRefs}>
                  <Card
                    onClick={() => handleClickToProjectId(data.title)}
                    className={"item"}
                    cardKey={i}
                    title={data.title.toUpperCase()}
                    desc={data.descShort}
                    src={data.img1}
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
                <div key={i} className="iframe-wrapper" ref={addToRefs}>
                  <iframe
                    scrolling="no"
                    title={data.bandcampUrl}
                    frameBorder="no"
                    src={data.bandcampUrl}
                  ></iframe>
                </div>
              );
            })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
