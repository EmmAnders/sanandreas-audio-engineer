import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
  return (
    <div className={props.className}>
      <NavLink exact to="/projects">
        PROJECTS
      </NavLink>

      <NavLink exact to="/music-blog">
        MUSIC BLOG
      </NavLink>

      <NavLink exact to="/contact ">
        CONTACT
      </NavLink>
    </div>
  );
};

export default Navlinks;
