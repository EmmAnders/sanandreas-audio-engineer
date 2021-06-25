import React, { useRef, useEffect } from "react";

import "../scss/pages/Project.scss";
import sample from "../assets/sample.jpg";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}


const Project = () => {
  const title = useRef(null);

  useEffect(()=> {
    
  })

  return (
    <div ref={title} className="project">
      <section className="title">
        <h1 className="fadeIn">PROJECT NAME</h1>
      </section>

      <section className="section-1">
        <div className="rowLayout">
          <h2 className="fadeIn">summary</h2>
          <p className="fadeIn">
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
            Lorem Ipsum.
          </p>
        </div>

        <div className="columnLayout">
          <h2 className="fadeIn">2021</h2>
          <img className="fadeIn img" src={sample} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default Project;
