import { useState } from 'react';
import './ProductForm.css';

function ProductForm(props) {

  const [newTitle, setTitle] = useState('');
  const [newDate, setDate] = useState('');

  function titleChangeHandler(event, prevState) {
    setTitle(event.target.value);
  }
  function dateChangeHandler(event, prevState) {
    setDate(event.target.value);
  }

  function SubmitHandler(event) {
    event.preventDefault();
    const productData = {
      title: newTitle,
      date: newDate
    }
    
    // console.log(productData);
    props.onSaveProduct(productData);

    setTitle('');
    setDate('');
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className='new-product_controls'>
        <div className='new-product_control'>
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_control'>
          <label>Date</label>
          <input type="date" value={newDate} onChange={dateChangeHandler} min='2025-01-30' max='2025-12-12'></input>
        </div>
        <div className='new-product_button'>
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm;