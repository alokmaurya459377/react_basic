import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props) {
  function saveProduct(product) {
    console.log("i am inside save product");
    console.log(product);

    props.pranay(product);
  }

  return (
    <div className='new-product'>
      <ProductForm onSaveProduct={saveProduct}></ProductForm>
    </div>
  )
}

export default NewProduct;