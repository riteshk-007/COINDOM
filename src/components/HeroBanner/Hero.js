import React from "react";
import "./Hero.scss";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero">
      <div className="top">
        <img src="/bit.png" alt="" />
        <span className="text">
          <h1>TRACK AND TRADE</h1>
          <h1 className="color">CRYPTO CURRENCIES</h1>
        </span>
        <img src="/eth.png" alt="" />
      </div>
      <button>
        See Prices
        <span>
          <BsChevronDoubleDown />
        </span>
      </button>
      <div className="bottom">
        <Link to={"/"} className="link coin">
          <img src="/image/img1.png" alt="" />
          <span>
            BitCoin <h4 className="green">0.12%</h4>
          </span>
          <span> ₹ 21,39,962.21</span>
        </Link>
        <Link to={"/"} className="link coin">
          <img src="/image/img2.png" alt="" />
          <span>
            ethereum <h4 className="green">0.39%</h4>
          </span>
          <span> ₹ 1,35,876.73</span>
        </Link>
        <Link to={"/"} className="link coin">
          <img src="/image/img3.png" alt="" />
          <span>
            Tether <h4 className="red">-0.00%</h4>
          </span>
          <span> ₹ 83.15</span>
        </Link>
        <Link to={"/"} className="link coin">
          <img src="/image/img4.png" alt="" />
          <span>
            BNB <h4 className="green">0.47%</h4>
          </span>
          <span> ₹ 217,917.28</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
