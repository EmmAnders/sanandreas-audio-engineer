import "../scss/pages/Home.scss";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation";

const Home = () => {
  return (
    <motion.div
    exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="home"
    >
      <h1>
        Freelance <span>Audio Engineer </span> Based in Copenhagen.
      </h1>
    </motion.div>
  );
};

export default Home;
