import React, { useState } from "react";
import "./Header.scss";

import { BsDiscord, BsTwitter } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
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
        <a href="#home">
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
