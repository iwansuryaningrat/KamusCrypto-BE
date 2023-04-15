import axios from "axios";
import "dotenv/config";

const getCointPrice = async (coin) => {
  var response;
  try {
    response = await axios.get(
      process.env.COINMARKETCAP_ENDPOINT +
        `v2/cryptocurrency/quotes/latest?symbol=${coin}&convert=USD`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
          "content-type": "application/json; charset=utf-8",
        },
      }
    );
  } catch (err) {
    response = null;

    // error
    return res.status(500).send({
      message: err.message,
    });
  }
  console.log(response);

  if (response) {
    const data = response.data.data;
    console.log(data);
    // Get the first coin
    const coinData = data;
    console.log(coinData);

    const priceData = data[0];
    // const coinData = {
    //   price: priceData.price,
    //   percent_change_1h: priceData.percent_change_1h,
    //   percent_change_24h: priceData.percent_change_24h,
    //   market_cap: priceData.market_cap,
    //   last_updated: priceData.last_updated,
    // };

    // console.log(coinData);
  }
};

getCointPrice("ETH");
