import { NavLink, Link } from "react-router-dom";
import "../../scss/navigation/Navbar.scss";
import resume from "../../assets/andreas_sandersen_resume.pdf";

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
  ];

  return (
    <ul className={props.className}>
      {links.map((link, i) => {
        return (
          <li key={i}>
            <NavLink
              onClick={props.onClick}
              to={link.to}
              activeClassName={"activeLink"}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
      <li>
        <Link download target="_blank" to={resume}>
          DOWNLOAD RESUMÉ
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
