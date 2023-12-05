import StripeCheckoutCard from "./StripeCheckoutCard";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51OJ2wsGskqTr9F1NjgcuzNzEdq0vIeUrXDOd2jGiNRDGjIptNszWXS9gzCDOiKF4fzwEahWo1Ite81udQAl0Chvq00wkO8srl4");

const PaymentDetails = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='lg:w-[40rem] mt-[0.5rem]'>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <StripeCheckoutCard/>
          </Elements>
        )}
      </div>
    </div>
  )
}

export default PaymentDetails