import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <img className="image" src={require("../assest/icon.png")} alt="" />
      <h5>
        <i>&lt;Sasta Coder /&gt;</i>
      </h5>
      <br />
      <h1>
        Hi there ! <span className="wave">👋</span>
      </h1>

      <div className="home-intro">
        <li className="first-word-uppercase-p">
          Real programmers don't comment their code. If it was hard to write, it
          should be hard to understand.
        </li>
        <br />
        <li className="first-word-uppercase-p">
          Always code as if the guy who ends up maintaning your code will be a
          violent psychopath who knows where you live.
        </li>
      </div>
    </div>
  );
}

export default Home;
