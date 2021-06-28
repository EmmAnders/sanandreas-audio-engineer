import React, { useRef, useEffect, useState } from "react";

import "../scss/pages/Project.scss";
import sample from "../assets/sample.jpg";

import { gsap, timeline } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocomotiveScroll from "locomotive-scroll";
import "../scss/locomotive-scroll.css";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const Project = () => {
  let container = useRef(null);
  const revealContent = useRef(null);
  revealContent.current = [];

  const addToRefs = (el) => {
    if (el && !revealContent.current.includes(el)) {
      revealContent.current.push(el);
    }
  };

  useEffect(() => {
    let locoScroll = new LocomotiveScroll({
      el: container.current,
      smooth: true,
      smoothMobile: true,
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

    revealContent.current.forEach((el, index) => {
      let exptl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          /*        start: "top bottom",  */
          end: () => `+=${el.offsetHeight}`,
          scrub: 2,
          scroller: container.current,
        },
      });

      exptl.from(el, {
        y: 100,
        opacity: 0,
        duration: 1,
      });
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
      <section className="title">
        <h1 ref={addToRefs}>PROJECT NAME</h1>
      </section>

      <section className="section-1">
        <div ref={addToRefs} className="rowLayout">
          <h2>summary</h2>
          <p>
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
            Lorem Ipsum.
          </p>
        </div>

        <div className="columnLayout">
          <h2>2021</h2>
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

      <div ref={addToRefs} className="section-3">
        <div className="inner">
          <h3>About</h3>
          <p>
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

      <div className="section-4">
        <div className="inner">
          <iframe
            ref={addToRefs}
            src="https://www.youtube.com/embed/3UdytvyWobA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            height="315"
            width="560"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Project;
