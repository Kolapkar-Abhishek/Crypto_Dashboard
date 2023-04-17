import axios from "axios";
import { COIN_API } from "../Constant";

export const getCoinData = (id) => {
  const coinData = axios
    .get(`${COIN_API}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("ERROR>>", err));

  if (coinData) return coinData;
  else return;
};

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `${COIN_API}/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((res) => {
      if (priceType == "market_caps") {
        return res.data.market_caps;
      } else if (priceType == "total_volumes") {
        return res.data.total_volumes;
      } else {
        return res.data.prices;
      }
    })
    .catch((err) => console.log("ERROR>>", err));

  if (prices) return prices;
  else return;
};

export const get100Coins = () => {
  const coins = axios
    .get(
      `${COIN_API}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    .then((res) => {
      if (res.status == 200) return res.data;
    })
    .catch((err) => console.log("ERROR>>", err));

    if(coins) return coins
    else return
};
