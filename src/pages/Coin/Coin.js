import React, { useContext, useEffect, useState } from "react";
import "./Coin.scss";
import { useParams } from "react-router-dom";
import { coindomOptions, fetchData, server } from "../../utils/Url";
import { ContextApp } from "../../utils/Context";
function Coin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { loading, setLoading } = useContext(ContextApp);
  const [coin, setCoin] = useState({});
  const param = useParams();

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(false);
        const data = await fetchData(`${server}${param.id}`, coindomOptions);
        setLoading(false);
        setCoin(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoins();
  }, [param.id, setLoading]);
  if (loading)
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  return (
    <div className="coin">
      <>
        <div className="left">
          <img src={coin?.image?.large} alt="" />
          <h2>{coin?.name}</h2>
          <p>Rank: #{coin?.coingecko_rank}</p>
        </div>
        <div className="right">
          <div className="top">
            <span>
              24h Change:
              <div>
                {coin?.market_data?.price_change_percentage_24h > 0 ? (
                  <span className="green">
                    {coin?.market_data?.price_change_percentage_24h} %
                  </span>
                ) : (
                  <span className="red">
                    {coin?.market_data?.price_change_percentage_24h} %
                  </span>
                )}
              </div>
            </span>
            <span>
              Price:
              <div>₹ {coin?.market_data?.current_price?.inr}</div>
            </span>
            <span>Symbol: {coin?.symbol}</span>
          </div>
          <div className="bottom">{coin?.description?.en}</div>
        </div>
      </>
    </div>
  );
}

export default Coin;
