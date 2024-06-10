const stripe = require("stripe")(
  "sk_test_51O7w6WKs6k4Ri2v4qQEuNLqoaaLMdUezwYmUAZvtq9CUEVXSA2Yr5azIudh7lLbjKsnWxznoNGFQjBHEhP7ngKQC00uQoJh9EO"
);
require("dotenv").config();
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.price,
      quantity: item.quantity,
    });
  });

  try {
    console.log("Creating Stripe checkout session...");
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "https://library-ecom-app-react.vercel.app/",
      cancel_url: "https://library-ecom-app-react.vercel.app/",
    });
  
    console.log("Session URL:", session.url);
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send({ error: error.message });
  }
  
};

