import React from "react";
import "./Footer.scss";
import { BsTwitter, BsLinkedin, BsDiscord, BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2FRiteshk_007"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/ritesh-kumar-8064b626b"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="#home">
          <BsDiscord />
        </a>
        <a
          href="https://github.com/riteshk-007"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="page">
        <p>Privacy</p>
        <p>Terms of Use</p>
      </div>
    </div>
  );
}

export default Footer;
