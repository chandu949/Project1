import React from "react";
import { Link } from "react-router-dom";

function Service(props) {
  return (
    <div>
      My Service Page!
      <Link className="remove-underline" to="/About">
        About
      </Link>
    </div>
  );
}

export default Service;
