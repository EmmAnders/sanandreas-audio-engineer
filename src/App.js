import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContextProvider from "./contexts/Context";

import "./App.scss";
import "./scss/components/ThemeToggle.scss";

import Navbar from "./components/navigation/Navbar";
import Home from "./pages/Home";
import MusicBlog from "./pages/MusicBlog";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App ">
      <ContextProvider>
        <Router>
          <Navbar />
          <Route
            render={({ location }) => (
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:id" component={Project} />
                <Route exact path="/music-blog" component={MusicBlog} />
              </Switch>
            )}
          />
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
};

export default App;
