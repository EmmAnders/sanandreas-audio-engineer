import { useState, useEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power3, TweenMax } from "gsap";

import sampleImage from "../assets/sample.jpg";
import arrow from "../assets/arrow-right.svg";

import "../scss/pages/ProjectDetails.scss";

import { MusicProductionData } from "../data/MusicProductionData";
import { TechProjectsData } from "../data/TechProjectsData";

const ProjectDetails = (props) => {
  const data = [...MusicProductionData, ...TechProjectsData];
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    //IMAGES VARIABLES
    const image1 = images.firstElementChild;
    const image2 = images.lastElementChild;

    //Content Variables

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    // Image Animation
    tl.from(image1, 1.2, { y: 1280, ease: Power3.easeOut }, "Start").from(
      image1.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );

    tl.from(image2, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2).from(
      image2.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );

    // Text Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      { y: 44, ease: Power3.easeOut, delay: 0.8 },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div ref={(el) => (app = el)} className="hero">
      <div className="container">
        <div className="heroInner">
          <div className="heroContent">
            <div ref={(el) => (content = el)} className="heroContentInner">
              <h1>
                <div className="heroContentLine">
                  <div className="heroContentLineInner">PROJECT PROJECT</div>
                </div>

                <div className="heroContentLine">
                  <div className="heroContentLineInner">NAME NAME</div>
                </div>

                <div className="heroContentLine">
                  <div className="heroContentLineInner">ELSE ELSE</div>
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas omnis debitis molestias qui a deserunt reprehenderit
                veritatis accusamus harum incidunt consequuntur ipsum ex in,
                quas ducimus possimus, vel, error eos.
              </p>
              <div className="btnRow">
                <button className="exploreBtn">
                  View Project
                  <div className="arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="heroImages">
            <div ref={(el) => (images = el)} className="heroImagesInner">
              <div className="heroImage one">
                <img src={sampleImage} alt="" />
              </div>
              <div className="heroImage two">
                <img src={sampleImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
