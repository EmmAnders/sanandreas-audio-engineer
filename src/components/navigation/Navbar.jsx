import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import NavLinks from "./Navlinks";

import "../../scss/Variables.scss";
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
        <div className="logo">
          <NavLink to="/">SANANDREAS</NavLink>
        </div>
        {width < breakpoint ? (
          <div>
            <div onClick={() => setOpen(!isOpen)} className="menu-btn">
              MENU
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
