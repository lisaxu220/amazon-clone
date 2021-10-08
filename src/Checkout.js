import React from 'react';
import './Checkout.css';

import Subtotal from './Subtotal';
import CartItem from './CartItem';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://newsroom.mastercard.com/wp-content/uploads/2014/02/MWC-MasterCard-Booth-Banner.jpg" alt="" className="checkout__ad" />

        <div className="checkout__title">
          <h3>{user?.email}</h3>
          <h2>Your Shopping Cart</h2>
        </div>
      
        <div className="cartItems">
          {cart.map(item => (
            <CartItem 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;
