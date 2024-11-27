const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Route to fetch cryptocurrency prices
app.get("/crypto/:coin", async (req, res) => {
  const coin = req.params.coin.toLowerCase(); // Get the coin from the URL
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data[coin]) {
      res.send({
        coin: coin,
        price_in_usd: response.data[coin].usd,
      });
    } else {
      res.status(404).send({ error: "Coin not found. Check the spelling!" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "Unable to fetch data. Try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

