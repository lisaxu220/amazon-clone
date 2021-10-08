import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
  const [{ cart, user }]= useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>

        {/* payment address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React St.</p>
          </div>
        </div>

        {/* payment review */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Your Order</h3>
          </div>
          <div className="payment__items">
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
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__method">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">

          </div>        
        </div>
      </div>
    </div>
  )
}

export default Payment;
