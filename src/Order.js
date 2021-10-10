import React from 'react';
import moment from "moment";

import './Order.css';

import CartItem from './CartItem';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

      <p className="order__id">
        <small>Order ID: {order.id}</small>
      </p>

      {order.data.cart?.map(item => (
        <CartItem
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
            <h3>
              <strong>Order Total: {value}</strong>
            </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  )
}

export default Order;
