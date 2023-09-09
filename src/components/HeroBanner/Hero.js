import React, { useContext } from "react";
import "./Hero.scss";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ContextApp } from "../../utils/Context";
function Hero() {
  const { coin, loading } = useContext(ContextApp);
  const data = coin.slice(0, 4);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
      <button onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
        See Prices
        <span>
          <BsChevronDoubleDown />
        </span>
      </button>
      <div className="bottom">
        {loading ? (
          <div className="loading">
            <span className="loader"></span>
          </div>
        ) : (
          data?.map((coins) => (
            <Link
              to={`/coin/${coins.id}`}
              className="link coin"
              key={coins?.id}
            >
              <img src={coins?.image} alt="" />
              <span>
                {coins?.name}
                <h4
                  className={
                    coins?.price_change_percentage_24h > 0 ? "green" : "red"
                  }
                >
                  {coins?.price_change_percentage_24h
                    ? coins?.price_change_percentage_24h.toFixed(2) + "%"
                    : ""}
                </h4>
              </span>
              <span>
                {"₹" + numberWithCommas(coins?.current_price.toFixed(2))}
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Hero;
