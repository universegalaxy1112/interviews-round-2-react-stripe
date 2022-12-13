import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import { ToastContainer } from "react-toastify";

function ProductCard(props) {
  const navigate = useNavigate();
  const { addProductToCart } = useContext(CartContext);
  const [size, setSize] = useState("");

  return (
    <>
      {/*  */}
      <div className=' card'>
        <img
          className='card-img-top img-fluid  align-self-center'
          src={`/images/${props.product.photo}`}
          alt='Card image cap'
          onClick={(evt) => {
            navigate(`/product/${props.product.id}`);
          }}
        />
        <div className='card-body'>
          <h5 className='card-title d-flex'>{props.product.name}</h5>
          <div className='d-flex price-panel mb-5'>
            <h6 className='card-text'>
              ${props.product.price}
            </h6>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProductToCart(1, size, props.product);
            }}
          >
            <div>
              <input type='submit' className='btn btn-outline-dark' value='Add to cart' />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ProductCard;
