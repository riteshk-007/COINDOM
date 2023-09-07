import React from "react";
import "./Choose.scss";

import {
  FaWallet,
  FaPencilRuler,
  FaSatelliteDish,
  FaChessKnight,
  FaBoxes,
} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

function Choose() {
  return (
    <div className="choose">
      <h1>
        WHY <span>CHOOSE US</span>
      </h1>
      <div className="container">
        <div className="box">
          <div className="card">
            <div className="left">
              <span>
                <FaWallet />
              </span>
            </div>
            <div className="right">
              <span>CONNECT YOUR WALLET</span>
              <p>Use Trust Wallet, Metamask or to connect to the app.</p>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <span>
                <FaPencilRuler />
              </span>
            </div>
            <div className="right">
              <span>SELECT YOUR QUANTITY</span>
              <p>Upload your crypto and set a title, description and price.</p>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <span>
                <AiFillThunderbolt />
              </span>
            </div>
            <div className="right">
              <span>CONFIRM TRANSACTION</span>
              <p>Earn by selling your crypto on our marketplace.</p>
            </div>
          </div>
        </div>
        <img src="/image/hand.png" alt="" />
        <div className="box">
          <div className="card">
            <div className="left">
              <span>
                <FaSatelliteDish />
              </span>
            </div>
            <div className="right">
              <span>RECEIVE YOUR OWN NFTS</span>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <span>
                <FaChessKnight />
              </span>
            </div>
            <div className="right">
              <span>TAKE A MARKET TO SELL</span>
              <p>
                Discover, collect the right crypto collections to buy or sell.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <span>
                <FaBoxes />
              </span>
            </div>
            <div className="right">
              <span>DRIVE YOUR COLLECTION</span>
              <p>We make it easy to Discover, Invest and manage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
