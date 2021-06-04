import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Home from "./pages/Home";
import MusicBlog from "./pages/MusicBlog";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:projectName" component={ProjectDetails} />
        <Route exact path="/music-blog" component={MusicBlog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
