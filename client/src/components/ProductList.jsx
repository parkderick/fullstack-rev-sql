import React from 'react';
import Products from './Products';
  
const ProductList = (props) => (
  <div className='product-list'>
    {props.products.map((product, index) => (
      <div key={index} onClick={() => props.changeCurrentProduct(product.id)}>
        <div>Product: {product.item}</div>
        <div>Minimum Cost: {product.min_cost}</div>
        <div>Current Bid: {product.curr_bid}</div>
        <div>Days Left: {product.ends_in}</div>
        <img src={product.image}></img>
      </div>
    ))}
  </div>
)


export default ProductList