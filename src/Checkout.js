import React from 'react';
import './Checkout.css';

import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://newsroom.mastercard.com/wp-content/uploads/2014/02/MWC-MasterCard-Booth-Banner.jpg" alt="" className="checkout__ad" />

        <div className="checkout__title">
          <h2>Your Shopping Cart</h2>

          {/* CartItem */}
        </div>

      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;
