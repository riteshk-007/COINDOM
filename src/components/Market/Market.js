import React, { useContext, useState } from "react";
import "./Market.scss";
import { Link } from "react-router-dom";
import { ContextApp } from "../../utils/Context";
import Pagination from "@mui/material/Pagination";
function Market() {
  const { coin, loading } = useContext(ContextApp);
  const [currentPage, setCurrentPage] = useState(1);
  const listOfPerPage = 10;

  const indexOfLastCoins = currentPage * listOfPerPage;
  const indexOfFirstCoins = indexOfLastCoins - listOfPerPage;
  const currentCoins = coin?.slice(indexOfFirstCoins, indexOfLastCoins);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  if (loading)
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
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
          {currentCoins?.map((item) => (
            <Link
              className="coinDetail link"
              to={`/coin/${item.id}`}
              key={item.id}
            >
              <p className="first">
                <img src={item?.image} alt="" />
                <span>{item?.name}</span>
              </p>
              <p>₹ {item?.current_price}</p>
              <p>
                {item?.price_change_percentage_24h > 0 ? (
                  <span className="green">
                    {item?.price_change_percentage_24h} %
                  </span>
                ) : (
                  <span className="red">
                    {item?.price_change_percentage_24h} %
                  </span>
                )}
              </p>
              <p>₹ {item?.market_cap}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="pagination">
        {coin?.length > 10 && (
          <Pagination
            color="secondary"
            variant="text"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(coin.length / listOfPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
}

export default Market;
