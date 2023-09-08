import React from "react";
import "./Market.scss";
import { Link } from "react-router-dom";
function Market() {
  /* https://react-responsive-pagination.elantha.com/custom-styled-pagination/ */

  return (
    <div className="market">
      <h1>Market Update</h1>
      <div className="container">
        <div className="table">
          <div className="head">
            <p>Coin</p>
            <p>Price</p>
            <p>24h Change</p>
            <p>Market Cap</p>
          </div>
          <Link className="coinDetail link" to={"/coin/1"}>
            <p className="first">
              <img src="/image/img1.png" alt="" />
              <span>BitCoin</span>
            </p>
            <p>₹ 21,39,962.21</p>
            <p className="green">0.12%</p>
            <p>₹ 511,300,246,257</p>
          </Link>
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default Market;
