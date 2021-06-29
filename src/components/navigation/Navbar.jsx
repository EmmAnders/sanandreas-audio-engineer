import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import NavLinks from "./Navlinks";
import "../../scss/Variables.scss";
import { gsap } from "gsap";

import { Squeeze as Hamburger } from "hamburger-react";

import "../../scss/navigation/Navbar.scss";

const Navbar = () => {
  const header = useRef();
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    gsap.from(header.current, { duration: 1, y: "50", opacity: 0, delay: 0.3 });
  }, []);

  return (
    <header>
      <nav ref={header} className="nav">
        <div className="logo">
          <NavLink to="/">SANANDREAS</NavLink>
        </div>
        {width < breakpoint ? (
          <div>
            <div className="burger">
              <Hamburger
                color="#262626"
                label="Show menu burger"
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
            {isOpen ? (
              <NavLinks
                onClick={() => setOpen(!isOpen)}
                className="mobileNav"
              />
            ) : null}
          </div>
        ) : (
          <NavLinks className="desktopNav" />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
