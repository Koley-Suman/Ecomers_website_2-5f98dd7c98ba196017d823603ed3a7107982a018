import { Button } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cartItem/cartItem.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);

  const  currentUser  = useSelector((state)=>state.user.currentUser);

  
  console.log("current",currentUser?currentUser.displayName:'guest');

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount*100 }),
    }).then((res) => res.json());

    console.log(response);

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName:"Guest",
        },
      },
    });

    if (paymentResult.error) {
      alert("error");
      console.log(paymentResult);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };
  return (
    <div className="paymentForm">
      <form onSubmit={paymentHandler}>
        <CardElement />
        <Button variant="outlined" type="submit">
          PAY
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
