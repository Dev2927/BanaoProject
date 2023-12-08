import React from "react";
import "./Home.css";
import rectangle2 from "../../assets/rectangle2.png";
import Tab from "../Tab/Tab";

function Home() {
  return (
    <>
      <div className="home-container">
        <img src={rectangle2} />
        <h1 className="home-heading">Computer Engineering</h1>
        <p className="home-para">142,765 Computer Engineers follow this</p>
      </div>
      <Tab />
    </>
  );
}

export default Home;
