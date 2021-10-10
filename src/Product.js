import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ title, image, price, rating, id }) {

  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} />

      <button onClick={addToCart} className="button__small">Add to Cart</button>
    </div>
  )
}

export default Product;
