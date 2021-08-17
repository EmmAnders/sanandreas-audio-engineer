import { NavLink } from "react-router-dom";
import "../../scss/navigation/Navbar.scss";

const Navlinks = (props) => {
  const links = [
    {
      to: "/work",
      name: "WORK",
    },
    {
      to: "/music-blog",
      name: "MUSIC BLOG",
    },
    {
      to: "/contact",
      name: "CONTACT",
    },
  ];

  

  return (
    <ul className={props.className}>
      {links.map((link, i) => {
        return (
          <li>
            <NavLink
              key={i}
              onClick={props.onClick}
              to={link.to}
              activeClassName={'activeLink'}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
