document.getElementById("fetchBtn").addEventListener("click", async () => {
    const coin = document.getElementById("coinInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
  
    if (!coin) {
      resultDiv.textContent = "Please enter a cryptocurrency name.";
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/crypto/${coin}`);
      if (response.ok) {
        const data = await response.json();
        resultDiv.textContent = `The price of ${data.coin.toUpperCase()} is $${data.price_in_usd}`;
      } else {
        const error = await response.json();
        resultDiv.textContent = error.error || "Failed to fetch data.";
      }
    } catch (err) {
      console.error(err);
      resultDiv.textContent = "Error connecting to the server.";
    }
  });
  app.use(express.static("public"));
