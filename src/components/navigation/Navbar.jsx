import { useEffect, useState } from "react";
import NavLinks from "./Navlinks";
import "../../scss/Variables.scss";

import { Squeeze as Hamburger } from "hamburger-react";

import "../../scss/navigation/Navbar.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <header>
      <nav className="nav">
        <div className="logo">SANANDREAS</div>
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
