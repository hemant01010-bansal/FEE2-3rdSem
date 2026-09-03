import reactLogo from './assets/react.svg'
import './App.css'
import X from './components/Home'
import ProductItem from './components/ProductItem'
import { useState } from 'react'

const initialProd = [
  ["https://m.media-amazon.com/images/I/51ItzIBMg6L._AC_UY327_FMwebp_QL65_.jpg", "Mouse", "1200/-Rs", 1200],
  ["https://m.media-amazon.com/images/I/41eRCljIjZL._AC_SR240,220_.jpg", "High Speed Cube", "146/-Rs", 146],
  ["https://m.media-amazon.com/images/I/71wzhUUcJVL._AC_UY327_FMwebp_QL65_.jpg", "Keyboard", "1800/-Rs", 1800],
  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTmwiBO7sa5XX8cnlAW0tHh_1uXjySQDoyXqT3nRfCw&s", "Iphone 17", "80,000/-Rs", 80000],
  ["https://m.media-amazon.com/images/I/61rmkmqD5VL._AC_SR480,440_.jpg", "Fire Bolt Smart Watch", "999/-Rs", 999],
  ["https://m.media-amazon.com/images/I/71yhrd0k2UL._AC_UY327_FMwebp_QL65_.jpg", "Apple iPad mini (A17 Pro)", "69, 499/-Rs", 69499],
  ["https://m.media-amazon.com/images/I/71yhrd0k2UL._AC_UY327_FMwebp_QL65_.jpg", "Apple iPad mini (A17 Pro)", "69, 499/-Rs", 69499],
  ["https://m.media-amazon.com/images/I/51ItzIBMg6L._AC_UY327_FMwebp_QL65_.jpg", "Mouse", "1200/-Rs", 1200],
  ["https://m.media-amazon.com/images/I/41eRCljIjZL._AC_SR240,220_.jpg", "High Speed Cube", "146/-Rs", 146],
  ["https://m.media-amazon.com/images/I/71wzhUUcJVL._AC_UY327_FMwebp_QL65_.jpg", "Keyboard", "1800/-Rs", 1800],
  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTmwiBO7sa5XX8cnlAW0tHh_1uXjySQDoyXqT3nRfCw&s", "Iphone 17", "80,000/-Rs", 80000],
  ["https://m.media-amazon.com/images/I/61rmkmqD5VL._AC_SR480,440_.jpg", "Fire Bolt Smart Watch", "999/-Rs", 999],
  ["https://m.media-amazon.com/images/I/71yhrd0k2UL._AC_UY327_FMwebp_QL65_.jpg", "Apple iPad mini (A17 Pro)", "69, 499/-Rs", 69499],
  ["https://m.media-amazon.com/images/I/71yhrd0k2UL._AC_UY327_FMwebp_QL65_.jpg", "Apple iPad mini (A17 Pro)", "69, 499/-Rs", 69499]
]

function App() {

  const [prodDetails, setProdDetails] = useState(initialProd);
  // const [noOfItem, setNoOfItem] = useState(initialProd.length)
  const [searchItem, setSearchItem] = useState("");
  const noOfItem=prodDetails.length;
  

  
  const filteredProducts = prodDetails.filter(prod => prod[1].toLowerCase().includes(searchItem.toLowerCase()))
  
  const handleDelete = (indexToDelete) => {
    setProdDetails(prev => prev.filter((prod, ind) => ind !== indexToDelete))
  }

  {/* calculate toatl price */}
  const totalPrice = prodDetails.reduce((total,prod)=> total + prod[3],0); //the ',0' initialize total value to 0, if we don't do this then toatl start as 0th index


  return (
    <>
      {/* show total no of products */}
      <p style={{ padding: '4px', fontSize: '22px', fontWeight: '550', color: 'rgb(0, 100, 250)' }}>No. Of Products : {noOfItem}</p>

      {/* show total price */}
      <p>Subtotal({noOfItem}) : <span style={{fontSize: '20px', fontWeight: '550'}}>{totalPrice} /-Rs</span></p>

      {/* search bar */}
      <div style={{width: '100%'}}><input placeholder='Search Products' style={{padding: '5px'}} value={searchItem} onChange={(e)=> setSearchItem(e.target.value)}/></div>

      {/* show products */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px', padding: '10px' }}>
        {/* show products */}
        {filteredProducts.map((prod, ind) => <ProductItem key={ind} imgsrc={prod[0]} prodName={prod[1]} price={prod[2]} onDelete={() => {
          handleDelete(ind)
        }} />)}

      </div>
        <div style={{fontSize: '30px', margin: '10px', textAlign: 'center'}}>{filteredProducts.length===0 ? "No such Items availble":null}</div>
    </>
  )
}

export default App
