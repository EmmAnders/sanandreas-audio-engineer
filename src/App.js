import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.scss";
import "./scss/components/ThemeToggle.scss";

import Navbar from "./components/navigation/Navbar";

import Home from "./pages/Home";
import MusicBlog from "./pages/MusicBlog";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/music-blog" component={MusicBlog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
