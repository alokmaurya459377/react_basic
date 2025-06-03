import ProductDate from "./ProductDate";
import Card from "./Card";
import './ProductItem.css';
import { useState } from "react";

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Popcon");
    console.log("button clicked");
  }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date}></ProductDate>
      <div className="product-pice">
        <h2>{title}</h2>
        <p>₹{props.amount}</p>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card> 
  )
}

export default ProductItem;