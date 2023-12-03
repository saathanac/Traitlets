const express = require("express");
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  // Enable CORS for the specified origin
  app.use(cors(corsOptions));
  

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51OJ2wsGskqTr9F1NKaMipU6Qdz8XXS4PdGRXnJczdC8S9SpDc2rY3dJ7YoKEXCB4wmlmxdqSENrJXXRu4incOzc500QnmMaTZ2');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "cad",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.listen(4242, () => console.log("Node server listening on port 4242!"));