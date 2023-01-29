import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.REACT_APP_stripe_sk);
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
// stripe.paymentLinks.create
const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default function Stripe_El() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: process.env.REACT_APP_stripe_sk,
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//   );
  return (
    <><CheckoutForm/></>
  )
};