import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_zuIZjWs0ok1X59mto8rNksGn00uzmbjP89';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Dress Up Store'
      billingAddress
      shippingAddress
      image='https://i.imgur.com/VrygpeG.png'
      description={`Your total is £ ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      currency='GBP'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
