import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "font-awesome/css/font-awesome.min.css";

import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import SingleBlog from "./components/SingleBlog";
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/blogs" component={Blogs} />
        <Route path="/single-blog" component={SingleBlog} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
