const express = require("express");
const stripe = require("stripe")("sk_test_51O7w6WKs6k4Ri2v4qQEuNLqoaaLMdUezwYmUAZvtq9CUEVXSA2Yr5azIudh7lLbjKsnWxznoNGFQjBHEhP7ngKQC00uQoJh9EO");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.price,
      quantity: item.quantity,
      
    });
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.send(JSON.stringify({ url: session.url }));
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
