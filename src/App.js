import { Route, Switch } from "react-router-dom";
import { useEffect, useRef, useContext } from "react";

import { CSSTransition } from "react-transition-group";
import { Power3, gsap } from "gsap";

import ContextProvider from "./contexts/Context";

import "./App.scss";
import "./scss/components/ThemeToggle.scss";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Projects";
import Project from "./pages/Project";
import MusicBlog from "./pages/MusicBlog";
import Footer from "./components/Footer";

const App = () => {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/work", name: "Work", Component: Work },
    { path: "/work/:title", name: "Project", Component: Project },
    { path: "/music-blog", name: "Music Blog", Component: MusicBlog },
  ];

  return (
    <>
      <ContextProvider>
        <ScrollToTop />
        <Navbar />
        <main className="container">
          <Route
            render={({ location }) => (
              <Switch location={location} key={location.pathname}>
                {routes.map(({ path, Component }) => (
                  <Route key={path} path={path} exact>
                    <>
                      <Component />
                    </>
                  </Route>
                ))}
              </Switch>
            )}
          />
        </main>
        <Footer />
      </ContextProvider>
    </>
  );
};
{
  {
    /*  
          <ScrollToTop />

      */
  }
  /*  <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/work/:title" component={Project} />
              <Route exact path="/music-blog" component={MusicBlog} />
            </Switch>
          )}
        /> */
}

export default App;
