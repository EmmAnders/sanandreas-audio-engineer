import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import "../scss/pages/Project.scss";
import sample from "../assets/sample.jpg";

const Project = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -70,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  /*   const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  }; */

  intersection && intersection.intersectionRatio < 0.5
    ? fadeIn(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <div className="project">
      <section ref={sectionRef} className="title">
        <h1 className="fadeIn">PROJECT NAME</h1>
      </section>

      <section className="section-1">
        <div className="rowLayout">
          <h2>summary</h2>
          <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.</p>
        </div>

        <div className="columnLayout">
          <h2>2021</h2>
          <img src={sample} alt="" />
        </div>
      </section>

      <div className="section-2">
        <div className="inner">
          <h3 className="fadeIn">About</h3>
          <p className="fadeIn">
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </p>
          <div className="btn-row fadeIn">
            <a href="/">Click here bruh</a>
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="inner">
          <iframe
            className="fadeIn"
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/3UdytvyWobA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="btn-row fadeIn">
            <a href="/">Click here bruh</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
