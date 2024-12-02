document.getElementById("fetchBtn").addEventListener("click", async () => {
  const coins = document
    .getElementById("coinInput")
    .value.trim()
    .toLowerCase()
    .split(",");
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous results

  if (!coins || coins.length === 0 || coins[0] === "") {
    resultDiv.textContent = "Please enter at least one cryptocurrency name.";
    return;
  }

  for (const coin of coins) {
    try {
      const response = await fetch(`http://localhost:3000/crypto/${coin.trim()}`);
      if (response.ok) {
        const data = await response.json();
        resultDiv.innerHTML += `<p>The price of ${data.coin.toUpperCase()} is $${data.price_in_usd}</p>`;
      } else {
        const error = await response.json();
        resultDiv.innerHTML += `<p>${coin.trim().toUpperCase()}: ${error.error || "Data unavailable"}</p>`;
      }
    } catch (err) {
      console.error(err);
      resultDiv.innerHTML += `<p>${coin.trim().toUpperCase()}: Error connecting to the server.</p>`;
    }
  }
});
  app.use(express.static("public"));
