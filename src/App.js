import React from 'react';
import './App.css';
import Products from './component/Products';
import NewProduct from './component/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Maggi',
      amount: 20,
      date: new Date(2000, 8, 12)
    },
    {
      id: 'p2',
      title: 'Parle',
      amount: 10,
      date: new Date(2001, 3, 22)
    },
    {
      id: 'p3',
      title: 'Kurkure',
      amount: 5,
      date: new Date(2005, 12, 5)
    },
    {
      id: 'p4',
      title: 'Tophy',
      amount: 50,
      date: new Date(2010, 11, 13)
    }
  ] 

  function printProductData(data) {
    console.log("i am inside App.js")
    console.log(data);
  }

  return (
    <div className='App'>
      <NewProduct pranay={printProductData}></NewProduct>
      <Products items={products}></Products>
    </div>
  );
}

export default App;
