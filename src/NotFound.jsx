import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p style={{ marginBottom: "10px" }}>That page cannot be found</p>
      <Link to="/" style={{ color: "#f1356d" }}>
        Go Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
