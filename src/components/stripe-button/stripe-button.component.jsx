import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 70;
  const publishableKey = 'pk_test_51Iz0lESC0xHI2nn0zLPP6DGSuX7i0U6uCokuTsomf0AYFtEMjSkBThlrM1nLYHIxAZ0Z97qzdXdl1K6EJA7Mn5WP00S9th1aIM';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Ankit Pvt. Ltd.'
      currency='INR'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $Rs. ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
