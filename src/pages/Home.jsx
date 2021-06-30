import { useState, useEffect, useRef, useContext } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { gsap, power2, TweenLite } from "gsap";

import "../scss/pages/Home.scss";

const Home = () => {
  gsap.registerPlugin(TextPlugin);

  let element = useRef();
  let container = useRef();

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
    switch_text(element.current, "SOUND DESIGNER", 4000);
    switch_text(element.current, "FRONT END DEVELOPER", 8000);
    switch_text(element.current, "DJ", 10000, function () {
      // run again after 6s
      setTimeout(init, 3000);
    });
  }

  useEffect(() => {
    if (container.current) {
      gsap.from(container.current, {
        duration: 1,
        y: "50",
        opacity: 0,
        delay: 0.6,
      });
      init();
    }
  }, []);

  return (
    <div ref={container} className="home">
      <h1>
        Freelance <span ref={element}></span>
      </h1>
      <h1>Based in Copenhagen.</h1>
    </div>
  );
};

export default Home;
