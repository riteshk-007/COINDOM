import React, { useState } from "react";
import "./Header.scss";

import { BsDiscord, BsTwitter } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
function Header() {
  const [show, setShow] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div className={sticky ? "header active" : "header"}>
      <div className="left">
        <Link to={"/"} className="link">
          <h1>COINDOM</h1>
        </Link>
      </div>
      <div className="middle">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Market</a>
          </li>
          <li>
            <a href="#home">Choose Us</a>
          </li>
          <li>
            <a href="#home">Join</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2FRiteshk_007"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a href="#home">
          <BsDiscord />
        </a>
      </div>
      <h3 onClick={() => setShow(!show)}>
        <RiMenu3Line />
      </h3>
      {show && (
        <div className="mobile">
          <div className="ul">
            <ul>
              <li>
                <a href="#home" onClick={() => setShow(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#home" onClick={() => setShow(false)}>
                  Market
                </a>
              </li>
              <li>
                <a href="#home" onClick={() => setShow(false)}>
                  Choose Us
                </a>
              </li>
              <li>
                <a href="#home" onClick={() => setShow(false)}>
                  Join
                </a>
              </li>
            </ul>
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
          </div>
          <h4 onClick={() => setShow(false)}>
            <MdClose />
          </h4>
        </div>
      )}
    </div>
  );
}

export default Header;
