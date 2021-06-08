import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";

import "./App.scss";
import "./scss/components/ThemeToggle.scss";

import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/Home";
import MusicBlog from "./pages/MusicBlog";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";

//Animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div className="App ">
      <Router>
        <Navbar />

        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:id" component={ProjectDetails} />
                <Route exact path="/music-blog" component={MusicBlog} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
