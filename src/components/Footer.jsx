import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import "../scss/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="">GITHUB</Link>
        </li>
        <li>
          <Link to="">SOUNDCLOUD</Link>
        </li>
        <li>
          <Link to="">TUMBLR</Link>
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
