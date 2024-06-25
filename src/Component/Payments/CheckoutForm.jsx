/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import useAuth from "../Hook/UseAuth";
import { ImSpinner9 } from "react-icons/im";
import {useNavigate} from 'react-router-dom'
const CheckoutForm = ({refetch, closeModal, bookingInfo }) => {
  const stripe = useStripe();
  const { user } = useAuth();
 
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // fetch client_secret
    if (bookingInfo?.price && bookingInfo?.price > 1) {
      getClientSecret({ price: bookingInfo?.price });
    }
  }, [bookingInfo?.price]);

  // get client_secret
  const getClientSecret = async (price) => {
    const { data } = await axiosPublic.post(`/create-payment-intent`, price);
    console.log("clientSecret from server--->", data);
    setClientSecret(data?.clientSecret);
  };
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError.message);
      setCardError(error);
      setProcessing(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      closeModal()
      refetch()
     
      // 1. Create payment info object
      const paymentInfo = {
        ...bookingInfo,
        email:bookingInfo.email,
        employeeId: bookingInfo._id,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      delete paymentInfo._id
      console.log(paymentInfo);
     try{
       // 2. save payment info in booking collection (db)
    const {data} =  await axiosPublic.post('/payments',paymentInfo)
      // change payment status to paid in db
      console.log(data);
     }catch(err){
      console.log(err)
     }
    }
    setProcessing(false)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex justify-between">
          
          <div className="mt-6">
            <button
              // onClick={onPay}
              disabled={!stripe || !clientSecret || processing || bookingInfo.paid===true}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {processing ? (
                <ImSpinner9 className="m-auto animate-spin" size={24} />
              ) : (
                `Pay ${bookingInfo?.price}`
              )}
            </button>
          </div>
          <div className="mt-6">
            <button
            
              onClick={closeModal}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
