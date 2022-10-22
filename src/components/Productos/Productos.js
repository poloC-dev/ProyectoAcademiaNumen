import React, { useEffect, useState } from 'react'
import 'primeicons/primeicons.css';
import './Productos.css'
import Producto from './Producto';
import axios from "axios"

const addToCart = (id) => {}

const Productos = () => {
 const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products")
      
    setData(response.data) 
      
    } catch (error) {
      console.log(error)
    }
    
    
  }
 
  useEffect(() => {
    getData()
  }, [])
  


  return (
    <>
      <h2>PRODUCTOS</h2>
        <div className="box grid-responsive">
            
            {
              data.map(product => <Producto 
                key={product.id}
                data={product}
                addToCart={addToCart} 
              />)
            },
          

        </div>

    </>
    

       
  )
}

export default Productos