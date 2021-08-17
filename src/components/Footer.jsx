import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import "../scss/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="https://github.com/sandy999999">GITHUB</Link>
        </li>
        <li>
          <Link to="https://soundcloud.com/sanandreasaudio">SOUNDCLOUD</Link>
        </li>
        <li>
          <Link to="https://www.tumblr.com/blog/view/sanandreas999">
            TUMBLR
          </Link>
        </li>
        <li>
          <Link to="https://sanandreasaudio.bandcamp.com/">BANDCAMP</Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
