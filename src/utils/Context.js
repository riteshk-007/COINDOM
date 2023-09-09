import { createContext, useEffect, useState } from "react";
import { coindomOptions, fetchData, server } from "./Url";

export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          `${server}markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en`,
          coindomOptions
        );
        setLoading(false);
        setCoin(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoins();
  }, []);
  return (
    <ContextApp.Provider value={{ loading, setLoading, coin }}>
      {children}
    </ContextApp.Provider>
  );
};

export default AppContext;
