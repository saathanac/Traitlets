import StripeCheckoutCard from "./StripeCheckoutCard";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { SelectionContext, useSelectionContext, SelectionContextProvider } from '../../context/SelectionContext';

const stripePromise = loadStripe("pk_test_51OJ2wsGskqTr9F1NjgcuzNzEdq0vIeUrXDOd2jGiNRDGjIptNszWXS9gzCDOiKF4fzwEahWo1Ite81udQAl0Chvq00wkO8srl4");

const PaymentDetails = () => {
  const { setCheckoutPrice } = useSelectionContext()

  const [clientSecret, setClientSecret] = useState("");
  const storedDetails = localStorage.getItem('braceletDetails');
  const braceletDetails = JSON.parse(storedDetails);
  console.log("payment details", braceletDetails)

  useEffect(() => {
    // Set productId conditionally based on braceletDetails
    fetch("http://localhost:4242/sheets-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ braceletDetails })
    })      
      .then((res) => res.json())

    console.log('fetched')
    const isDoubleSided = 
    braceletDetails.braceletDetails['centerpiece']['front-side']['type'] && braceletDetails.braceletDetails['centerpiece']['back-side']['type']
        ? true
        : false;
    // Create PaymentIntent with the dynamically determined productId
    fetch("https://traitlets-be.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ braceletDetails })
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setCheckoutPrice(data.productPrice);
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