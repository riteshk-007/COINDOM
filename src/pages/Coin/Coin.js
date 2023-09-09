import React, { useContext, useEffect, useState } from "react";
import "./Coin.scss";
import { useParams } from "react-router-dom";
import { coindomOptions, fetchData, server } from "../../utils/Url";
import { ContextApp } from "../../utils/Context";
import Chart from "../../components/Chart/Chart";
import { Button } from "@mui/material";
function Coin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { loading, setLoading } = useContext(ContextApp);
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);
  const param = useParams();
  const btns = ["24h", "7d", "14d", "30d", "60d", "1y", "max"];
  const switchChart = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(false);
        const data = await fetchData(`${server}${param.id}`, coindomOptions);
        const coinData = await fetchData(
          `${server}${param.id}/market_chart?vs_currency=inr&days=${days}`,
          coindomOptions
        );
        setLoading(false);
        setChartArray(coinData.prices);
        setCoin(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoins();
  }, [param.id, setLoading, chartArray, days]);
  if (loading)
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  return (
    <>
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
                <div
                  className={
                    coin?.market_data?.price_change_percentage_24h > 0
                      ? "green"
                      : "red"
                  }
                >
                  {coin.market_data
                    ? coin?.market_data?.price_change_percentage_24h.toFixed(
                        2
                      ) + "%"
                    : ""}
                </div>
              </span>
              <span>
                Price:
                <div>
                  {coin?.market_data
                    ? "₹" +
                      numberWithCommas(
                        coin?.market_data?.current_price.usd.toFixed(2)
                      )
                    : null}
                </div>
              </span>
              <span>Symbol: {coin?.symbol}</span>
            </div>
            <div className="bottom">{coin?.description?.en}</div>
          </div>
        </>
      </div>
      <div className="chart">
        <Chart arr={chartArray} days={days} />
      </div>
      <div className="btn">
        {btns.map((item) => (
          <Button
            key={item}
            onClick={() => switchChart(item)}
            variant="contained"
            color="success"
          >
            {item}
          </Button>
        ))}
      </div>
    </>
  );
}

export default Coin;
