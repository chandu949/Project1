import React from "react";
import "./Movies.css";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Errror from "./Errror";
function Home(props) {
  return (
    <div>
      This is Home
      <Link className="remove-underline" to="/About">
        About
      </Link>
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route component={Errror} />
    </div>
  );
}

export default Home;
