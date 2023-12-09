import StripeCheckoutCard from "./StripeCheckoutCard";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { SelectionContext, useSelectionContext, SelectionContextProvider } from '../../context/SelectionContext';

const stripePromise = loadStripe("pk_test_51OJ2wsGskqTr9F1NjgcuzNzEdq0vIeUrXDOd2jGiNRDGjIptNszWXS9gzCDOiKF4fzwEahWo1Ite81udQAl0Chvq00wkO8srl4");

const PaymentDetails = () => {
  const [clientSecret, setClientSecret] = useState("");
  const storedDetails = localStorage.getItem('braceletDetails');
  const braceletDetails = JSON.parse(storedDetails);
  console.log("payment details", braceletDetails)
  useEffect(() => {
    // Set productId conditionally based on braceletDetails
    const isDoubleSided = 
    braceletDetails.braceletDetails['centerpiece']['front-side']['type'] && braceletDetails.braceletDetails['centerpiece']['back-side']['type']
        ? true
        : false;
    // Create PaymentIntent with the dynamically determined productId
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDoubleSided })
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log("Product Price:", data.productPrice);
      });
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