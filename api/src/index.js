const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
require('dotenv').config();
const corsOptions = {
  origin: ['http://localhost:5173', 'https://traitlets-fe.onrender.com'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const { getGoogleSheetClient, writeGoogleSheet } = require('./googlesheets.js');

// Enable CORS for the specified origin
app.use(cors(corsOptions));

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SK);
const endpointSecret = process.env.ENDPOINT_SECRET;

app.use(express.static("public"));

let braceletDetails

// Define the endpoint for handling POST requests to '/sheets-test'
app.post('/sheets-test', async (req, res) => {
  // Assuming updateGoogleSheet is a synchronous function
  braceletDetail = req.body?.braceletDetails?.braceletDetails

 const braceletDetails = {
    braceletDetails: {
        "base-beads": {
            id: "black-wood",
            name: "Black Wood",
            hex: "#241e1f",
            image: "/images/black-wood.png"
        },
        "accessory-beads": {
            id: "purple-cracked",
            name: "Cracked Purple Glass",
            hex: "#b259c2",
            image: "./images/purple_cracked.png"
        },
        centerpiece: {
            "front-side": {
                type: "icon",
                design: "Football",
                image: "./images/unedited-traitlet-icons/Football.png"
            },
            "back-side": {
                type: null,
                design: null
            }
        },
        size: "XL"
    }
};


  const orderId = '123456';
  const testPaymentIntent = {
    id: 'pi_test_1234567890', // Replace with an actual ID
    orderId: orderId,
    shipping: {
      name: 'John Doe',
      phone: '+1234567890',
      address: {
        city: 'Test City',
        country: 'Test Country',
        line1: '123 Test Street',
        line2: 'Apt 4B', // Optional
        postal_code: '12345',
        state: 'Test State',
      }
    },
    receipt_email: 'john.doe@example.com', // Optional, replace with an actual email
  };
  console.log('updating sheet')
  updateGoogleSheet('not needed', 12345, braceletDetails.braceletDetails || null, testPaymentIntent);

  // Respond to the client
  res.status(200).send('Update successful');
});

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    let event = request.body;

    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature'];
      console.log('Received signature:', signature);
      console.log('Received request body:', request.body);

      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        // console.log(paymentIntent);
        updateGoogleSheet('not needed', paymentIntent.amount, braceletDetails || null, paymentIntent)
        break;
      case 'payment_intent.created':
        console.log(`PaymentIntent creation successful!`);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    response.json({received: true});
  });

  async function updateGoogleSheet(productId, productPrice, braceletDetails, paymentIntent) {
    // Append order data to Google Spreadsheet
    let orderData
    if(braceletDetails){
        const orderId = uuidv4();
        const productId = isDoubleSided(braceletDetails) ? 'Double Design' : 'Single Design'
        orderData = [
            new Date().toISOString(), 
            productId, 
            (productPrice / 100),
            paymentIntent.id,
            orderId,
            paymentIntent.shipping.name,
            paymentIntent.receipt_email || '',
            paymentIntent.shipping.phone,
            paymentIntent.shipping.address.city,
            paymentIntent.shipping.address.country,
            paymentIntent.shipping.address.line1,
            paymentIntent.shipping.address.line2 || '',
            paymentIntent.shipping.address.postal_code,
            paymentIntent.shipping.address.state,
            braceletDetails['base-beads']['name'],
            braceletDetails['base-beads']['name'] || '',
            braceletDetails['centerpiece']['front-side']['type'] || '',
            braceletDetails['centerpiece']['front-side']['design'] || '',
            braceletDetails['centerpiece']['back-side']['type'] || '',
            braceletDetails['centerpiece']['back-side']['design'] || '',
            braceletDetails['size'],
        ];
    }
    else{
        console.error("braceletDetails not received")
    }
    console.log("before client")
    const googleSheetClient = await getGoogleSheetClient();
    console.log("client got")
    await writeGoogleSheet(googleSheetClient, orderData);
    console.log("after write")
  }

app.use(express.json());


const isDoubleSided = (braceletDetails) => {
    return braceletDetails['centerpiece']?.['front-side']?.['design'] && braceletDetails['centerpiece']?.['back-side']?.['design'];
}

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
  braceletDetails = req.body?.braceletDetails?.braceletDetails

  // Set productId based on the value of doubleSided
  const productId = isDoubleSided(braceletDetails) ? "prod_P7HdNrekkz8B1W" : "prod_P7HcQj0aZcDqIC";

  try {
    const productPrice = await calculateOrderAmount(productId);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: productPrice,
      currency: "cad",
      automatic_payment_methods: {
        enabled: true,
      }
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
        productPrice: productPrice/100,
      });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
