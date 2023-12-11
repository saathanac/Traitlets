const express = require("express");
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const { getGoogleSheetClient, writeGoogleSheet } = require('./googlesheets.js');

// Enable CORS for the specified origin
app.use(cors(corsOptions));

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51OJ2wsGskqTr9F1NKaMipU6Qdz8XXS4PdGRXnJczdC8S9SpDc2rY3dJ7YoKEXCB4wmlmxdqSENrJXXRu4incOzc500QnmMaTZ2');

app.use(express.static("public"));
app.use(express.json());

// Function to retrieve the product price from Stripe using the product ID
const getProductPrice = async (productId) => {
  try {
    const product = await stripe.products.retrieve(productId);
    const price = await stripe.prices.list({ product: product.id, limit: 1 });
    return price.data[0].unit_amount;
  } catch (error) {
    console.error("Error retrieving product price:", error);
    throw new Error("Error retrieving product price");
  }
};

const calculateOrderAmount = async (productId) => {
  try {
    // Replace this constant with a dynamic calculation of the order's amount
    const productPrice = await getProductPrice(productId);
    return productPrice;
  } catch (error) {
    console.error("Error calculating order amount:", error);
    throw new Error("Error calculating order amount");
  }
};

app.post("/create-payment-intent", async (req, res) => {
  const { isDoubleSided } = req.body;
  console.log(isDoubleSided)

  // Set productId based on the value of doubleSided
  const productId = isDoubleSided ? "prod_P7HdNrekkz8B1W" : "prod_P7HcQj0aZcDqIC";

  try {
    const productPrice = await calculateOrderAmount(productId);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: productPrice,
      currency: "cad",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Append order data to Google Spreadsheet
    const orderData = [new Date().toISOString(), productId, productPrice];
    const googleSheetClient = await getGoogleSheetClient();
    await writeGoogleSheet(googleSheetClient, orderData);
    console.log("after write")
    // Include the product price in the response
    res.send({
      clientSecret: paymentIntent.client_secret,
      productPrice: productPrice,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
