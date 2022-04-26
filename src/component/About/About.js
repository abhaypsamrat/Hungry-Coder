import React from "react";
import "./About.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function About() {
  return (
    <div className="About">
      <h3>
        <i>About Sasta Coder</i>
      </h3>
      <p>
        {/* This is programmer blog. */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quidem?
        Minus, quas! Earum maxime dignissimos rem quisquam omnis voluptatem ab
        quis. Tempora iure iste asperiores dolores quia eligendi! Doloremque
        repellat repellendus deleniti est. Blanditiis officiis et explicabo
        dicta. Quod, blanditiis at similique enim deserunt labore nisi doloribus
        tempore nihil quam omnis magni ducimus natus sit vel, id reprehenderit
        nam non quo consectetur ipsa molestias nobis.
      </p>
      <div className="Social">
        <a
          href="https://www.instagram.com/sasta.coder"
          target="blank"
          className="instagram-social"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/"
          target="blank"
          className="linkedin-social"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://www.github.com/"
          target="blank"
          className="github-social"
        >
          <AiFillGithub />
        </a>

        <a
          href="https://www.twitter.com/"
          target="blank"
          className="twitter-social"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
}

export default About;
