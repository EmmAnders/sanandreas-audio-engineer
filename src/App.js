import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/navigation/Navbar";

import Home from "./pages/Home";
import MusicBlog from "./pages/MusicBlog";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:projectName" component={ProjectDetails} />
        <Route exact path="/music-blog" component={MusicBlog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
