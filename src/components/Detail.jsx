import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import { ProductContext } from "../ProductContext";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./PageNotFound";

function Detail() {
  const { cart, addProductToCart, error } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQty] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    const fetchFilteredProduct = async () => {
      // If there are no items in the cart, get the details from the database.
      if (cart.length === 0) {
        const filteredProduct = products.filter((p) => {
          return p.id === parseInt(id);
        });
        setProduct(filteredProduct[0]);
      } else {
        //If item already added to cart then pull it out and populate quantity field.
        //This is when user wants to edit the product added to cart.
        const p = cart.filter((c) => {
          return c.product.id === parseInt(id);
        });
        if (p.length > 0) {
          setProduct(p[0].product);
          setQty(p[0].qty);
          setSize(p[0].size);
        } else {
          //If product have not been added to cart yet, get details from database.
          const filteredProduct = products.filter((p) => {
            return p.id === parseInt(id);
          });
          setProduct(filteredProduct[0]);
        }
      }
    };
    fetchFilteredProduct();
    document.getElementById("qty").select();
  }, []);

  if (error) throw error;
  if (!product) return <PageNotFound />;

  return (
    <>
      {product && (
        <div className='row marginDetail'>
          <div className='col-12 col-md-6 align-self-center'>
            <img className='align-self-center' src={`/images/${product.photo}`} />
          </div>
          <div className='col-12 col-md-6 align-self-center'>
            <div className='mb-3 row'>
              <h2>{product.name}</h2>
            </div>
            <div className='mb-3 row'>
              <div className='col-sm-12 Italic'>{product.description}</div>
            </div>
            <div className='mb-3 row'>
              <div className='col-sm-3'>Price:</div>
              <div className='col-sm-9 Italic'>
                <i></i>${product.price}/-
              </div>
            </div>
            <div className='mb-3 row'>
              <div className='col-sm-3'>Quantity:</div>
              <div className='col-sm-9 qty'>
                <input id='qty' type='text' value={quantity} onChange={(e) => setQty(e.target.value)} />
              </div>
            </div>
            <div>
              <a className='btn btn-outline-dark' onClick={() => addProductToCart(quantity, size, product)}>
                Add to Cart
              </a>
            </div>
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
