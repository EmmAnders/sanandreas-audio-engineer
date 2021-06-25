import { useState, useEffect, useRef, useContext } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { gsap, power2, TweenLite } from "gsap";

import "../scss/pages/Home.scss";

const Home = () => {
  gsap.registerPlugin(TextPlugin);

  let element = useRef();

  function switch_text(el, txt, delay, callback) {
    setTimeout(function () {
      gsap.to(el, 2, {
        text: { value: txt },
        onComplete: function () {
          if (callback && typeof callback === "function") {
            callback();
          }
        },
      });
    }, delay);
  }

  function init() {
    switch_text(element.current, "AUDIO ENGINEER", 0);
    switch_text(element.current, "FRONT-END DEVELOPER", 4000);
    switch_text(element.current, "DJ", 8000);
    switch_text(element.current, "SOMETHING MORE?", 10000, function () {
      // run again after 6s
      setTimeout(init,3000);
    });
  }

  useEffect(() => {
    init();
  },[]);

  return (
    <div className="home">
      <h1>
        Freelance <span ref={element}></span>
        {/*       <span>Front-end Developer </span> */}
      </h1>
      <h1>Based in Copenhagen.</h1>
    </div>
  );
};

export default Home;
