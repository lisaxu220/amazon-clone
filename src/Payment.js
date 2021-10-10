import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import CartItem from './CartItem';

import './Payment.css';
import { db } from './firebase';

function Payment() {
  const [{ cart, user }]= useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [cart])

  console.log('CLIENT SECRET>>', clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      db
        .collection('users')
        .doc(user?.id)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setSucceeded(true);
      setError(null);
      setProcessing(false)

      dispatch({
        type: 'EMPTY_CART'
      })

      history.replace('/orders')
    })
  }

  const handleChange = e => {
    setDisabled(Event.empty);
    setError(Event.error ? Event.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React St.</p>
          </div>
        </div>

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

        <div className="payment__section">
          <div className="payment__method">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form action="" onSubmit={handleSubmit}> 
              <CardElement onChange={handleChange}/>

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                      <h3>
                        <strong>Order Total: {value}</strong>
                      </h3>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Payment;
