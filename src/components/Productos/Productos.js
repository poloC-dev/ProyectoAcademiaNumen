import React from 'react'
import './Productos.css'
import Producto from './Producto';
import Data from '../../data/data.json'

const Productos = () => {
 
  
 
  return (
    <>
    <h2>PRODUCTOS</h2>
        <div className="box grid-responsive">
            
            {
              Data.map(product => <Producto key={product.id}
                data={product} 
              />)
            },
          

        </div>

    </>
    

       
  )
}

export default Productos