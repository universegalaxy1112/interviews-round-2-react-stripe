import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import ProductSummary from "./ProductSummary";

function Cart() {
  const { cart, removeProductFromCart, error } = useContext(CartContext);
  const navigate = useNavigate();

  function renderCartItem(itemInCart, index) {
    return (
      <div className='row' key={index.toString()}>
        <div className='col-12 col-md-6'>
          <img
            className='card-img-top img-fluid align-self-center cart-img'
            src={`/images/${itemInCart.product.photo}`}
            alt='Card image cap'
          />
        </div>
        <div className='col-12 col-md-3 align-self-center'>
          <h6>{itemInCart.product.name}</h6>
          <h6>Quantity: {itemInCart.qty}</h6>
          <h6>
            Price: <i />${itemInCart.product.price}
          </h6>
          <p className='d-flex justify-content-between'>
            <a
              href='#'
              onClick={() => {
                removeProductFromCart(itemInCart.product.id);
              }}
            >
              <i className='fa fa-trash' />
            </a>
            <a
              href='#'
              onClick={() => {
                navigate("/product/" + itemInCart.product.id);
              }}
            >
              <i className='fa fa-pencil' />
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (error) throw error;

  return (
    <div className='row marginCart'>
      <h1>Cart</h1>
      <hr />
      {cart.length > 0 ? (
        <>
          <div className='col-12 col-md-7'>{cart.map(renderCartItem)}</div>
          <div className='col-12 col-md-5 d-flex justify-content-end'>
            <ProductSummary />
          </div>
        </>
      ) : (
        <h4>Your cart is empty.</h4>
      )}
    </div>
  );
}

export default Cart;
