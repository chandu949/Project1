import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div>
      My About Page!
      <Link className="remove-underline" to="/service">
        Services
      </Link>
    </div>
  );
}

export default About;
