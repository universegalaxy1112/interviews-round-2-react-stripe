import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../ProductContext";

function Search() {
  const [searchText, setSearchText] = useState("");
  const { products: allProducts, error } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(searchText).then(null);
  }, [searchText]);

  const fetchProducts = async () => {
    if (searchText !== "") {
      const filteredProduct = allProducts.filter(({ name, category }) => {
        return name.toLowerCase().match(searchText.toLowerCase());
      });
      setProducts(filteredProduct);
    } else {
      setProducts(allProducts);
    }
  };
  if (error) return error;

  return (
    <>
      <h1 className='marginSearch'>Search</h1>
      <hr />
      <div className='container d-flex align-items-center justify-content-center filter'>
        <input
          type='text'
          value={searchText}
          placeholder='Search Product'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {products.length > 0 ? (
        <div className='col-12 col-sm-12 col-md d-flex flex-wrap justify-content-center align-items-center'>
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      ) : (
        <div className='col-12 col-sm col-md d-flex justify-content-center mt-5'>
          <h4>No Search Result...</h4>
        </div>
      )}
    </>
  );
}

export default Search;
