import React, { useRef, useEffect, useState } from "react";

import "../scss/pages/Project.scss";
import sample from "../assets/sample.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocomotiveScroll from "locomotive-scroll";
import "../scss/locomotive-scroll.css";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const Project = () => {
  let container = useRef(null);
  const title = useRef(null);
  const summary = useRef(null);
  const img1 = useRef(null);
  const aboutHeading = useRef(null);
  const about = useRef(null);
  const video = useRef(null);

  useEffect(() => {
    let locoScroll = new LocomotiveScroll({
      el: container.current,
      smooth: true,
    });

    locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(container.current, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: container.current.style.transform ? "transform" : "fixed",
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    gsap.from(title.current, {
      autoAlpha: 0,
      ease: "power2.easeIn",
      delay: 0.5,
      y: 100,
    });

    gsap.from(summary.current, {
      autoAlpha: 0,
      ease: "power2.easeIn",
      duration: 0.8,
      x: -200,
      scrollTrigger: {
        trigger: summary.current,
        scroller: container.current,
      },
    });

    gsap.from(img1.current, {
      autoAlpha: 0,
      ease: "power2.easeIn",
      delay: 2,
      y: 100,
      scrollTrigger: {
        trigger: img1.current,
        scroller: container.current,
      },
    });

    gsap.from(aboutHeading.current, {
      autoAlpha: 0,
      ease: "power2.easeIn",
      delay: 0.5,
      y: 100,
      scrollTrigger: {
        trigger: aboutHeading.current,
        scroller: container.current,
      },
    });

    gsap.from(about.current, {
      autoAlpha: 0,
      ease: "power2.easeIn",
      delay: 1,
      y: 100,
      scrollTrigger: {
        trigger: about.current,
        scroller: container.current,
      },
    });

    gsap.from(video.current, {
      autoAlpha: 0,
      ease: "power2.easeIn",
      delay: 1,
      y: 100,
      scrollTrigger: {
        trigger: video.current,
        scroller: container.current,
      },
    });

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={container} className="project">
      <section ref={title} className="title">
        <h1 className="fadeIn">PROJECT NAME</h1>
      </section>

      <section className="section-1">
        <div ref={summary} className="rowLayout">
          <h2 className="fadeIn">summary</h2>
          <p className="fadeIn">
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
            Lorem Ipsum.
          </p>
        </div>

        <div ref={img1} className="columnLayout">
          <h2 className="fadeIn">2021</h2>
          <img className="fadeIn img" src={sample} alt="" />
        </div>
      </section>

      <section className="section-0">
        <div className="container">
          <div className="img-1">
            <img src={sample} alt="" />
          </div>

          <div className="img-2">
            <img src={sample} alt="" />
          </div>
        </div>
      </section>

      <div className="section-2">
        <div className="inner">
          <h3 ref={aboutHeading} className="fadeIn">
            About
          </h3>
          <p ref={about} className="fadeIn">
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
            imperdiet. Cum sociis natoque penatibus et magnis dis. Tortor vitae
            purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla
            facilisi etiam dignissim diam quis enim lobortis. Enim sit amet
            venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac
            odio tempor orci dapibus. Et ultrices neque ornare aenean euismod
            elementum nisi. Dolor morbi non arcu risus quis. Lectus sit amet est
            placerat in egestas erat imperdiet. Cum sociis natoque penatibus et
            magnis dis.
          </p>
        </div>
      </div>

      <div className="section-3">
        <div className="inner">
          <iframe
            ref={video}
            className="fadeIn"
            src="https://www.youtube.com/embed/3UdytvyWobA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Project;
