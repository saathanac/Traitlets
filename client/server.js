// This is your test secret API key.
const stripe = require('stripe')('sk_test_51OJ2wsGskqTr9F1NKaMipU6Qdz8XXS4PdGRXnJczdC8S9SpDc2rY3dJ7YoKEXCB4wmlmxdqSENrJXXRu4incOzc500QnmMaTZ2');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    customer_email: 'customer@example.com',
    submit_type: 'donate',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['CA'],
    },
    line_items: [
      {
        price: 'price_1OJ344GskqTr9F1N0kN7nRlF',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({clientSecret: session.client_secret});
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));