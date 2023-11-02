import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/about" components={AboutMe} />
        <Route path="/projects" components={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
}
