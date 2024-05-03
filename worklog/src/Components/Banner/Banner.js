import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="bannerImage">
      <div className="bannerContainer">
        <h1>Welcome</h1>
        <p>
          Please log in if you already have an account, or sign up for a new
          one!
        </p>
      </div>
    </div>
  );
}

export default Banner;
