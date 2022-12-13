import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

function ProductSummary() {
  const navigate = useNavigate();
  const { cart, emptyCart, error } = useContext(CartContext);
  let TotalAmount = 0;
  cart.map((c) => {
    TotalAmount = TotalAmount + c.qty * c.product.price;
  });
  function tokenHandler(token) {
    //console.log(token);
    emptyCart();
    navigate("/confirmation", { state: token });
  }

  if (error) throw error;

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className='row'>
            <div className='col pt-4'>
              <h6>
                Price details ({cart.length}) {cart.length > 1 ? "items." : "item."}
              </h6>
              <h6>
                Subtotal: <i></i>${TotalAmount}
              </h6>
              <hr />
              <h6>
                Total: <i></i>${TotalAmount}
              </h6>
              <div className='d-flex justify-content-between'>
                <StripeCheckout
                  name='Reangel'
                  image='/images/logo.png'
                  amount={TotalAmount * 100}
                  shippingAddress
                  token={tokenHandler}
                  stripeKey='pk_test_51LxG7gIAzrcl9sc4iku7NsRXMFdVAFAYuMapJM6xhyrdxtI5l0oZVkxJeUGrizqpD5A0D6dF2e2JBlEGgXXcJ2VT00wxFU0E9U'
                  currency='USD'
                >
                  <button className='btnCarrito '>Buy Now</button>
                </StripeCheckout>
                <span>
                  <button className='btnCarrito' onClick={emptyCart}>
                    Empty Cart
                  </button>
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h4>Your cart is empty.</h4>
      )}
    </>
  );
}

export default ProductSummary;
