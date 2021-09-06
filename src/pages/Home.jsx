import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { gsap } from "gsap";

import "../scss/pages/Home.scss";

const Home = () => {
  gsap.registerPlugin(TextPlugin);

  let element = useRef();
  let line1 = useRef(null);
  let line2 = useRef(null);

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
    switch_text(element.current, "FRONT-END DEVELOPER", 8000);
    switch_text(element.current, "DJ", 10000, function () {
      setTimeout(init, 3000);
    });
  }

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 150,
      stagger: {
        amount: 0.15,
      },
    });

    init();
  }, [line1, line2]);

  return (
    <div className="inner">
      <h1>
        <div className="line-wrap">
          <div ref={(el) => (line1 = el)} className="line">
            Freelance <span ref={element}></span>
          </div>
        </div>

        <div className="line-wrap">
          <div ref={(el) => (line2 = el)} className="line">
            Based in Copenhagen
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Home;
