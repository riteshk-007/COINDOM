import React from "react";
import "./Join.scss";
function Join() {
  return (
    <div className="join">
      <div className="top">
        <img src="/bit.png" alt="" />
        <span className="text">
          <h1>JOIN US VIA</h1>
          <h1 className="color">DISCORD</h1>
          <p>Invest and manage all your crypto at one place.</p>
        </span>
        <img src="/eth.png" alt="" />
      </div>
      <button>Join Via Discord</button>
    </div>
  );
}

export default Join;
