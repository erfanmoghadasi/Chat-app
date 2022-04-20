import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="loading"></div>
      <div id="loading-text">loading</div>
    </div>
  );
};

export default Loader;
