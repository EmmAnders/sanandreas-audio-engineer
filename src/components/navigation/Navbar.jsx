import { useEffect, useState } from "react";
import NavLinks from "./Navlinks";

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
            <Hamburger
             /*  color="#4FD1C5" */
              label="Show menu"
              toggled={isOpen}
              toggle={setOpen}
            />
            {isOpen ? <NavLinks className="mobileNav" /> : null}
          </div>
        ) : (
          <NavLinks className="desktopNav" />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
