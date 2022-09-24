import React from 'react'
import './Productos.css'
import Producto from './Producto';


const productos = [
  {id: 1, nombre: "Producto A", precio: 10, source: "https://imgs.search.brave.com/CmX1jhaQBaIighikas52PP-Gb5Y9BpKxIUe2vEuJ64M/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/YUpzeWpBTHVOdDBP/Y1czZ0dMa293Rk5D/NyZwaWQ9QXBp"},
  {id: 2, nombre: "Producto B", precio: 50, source: "https://imgs.search.brave.com/c4hqbAQdN4Q2jVO2YyYRMTQW-SpzKDth5FBpep2G2Pg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/NHJmb2l2WTBXQlFw/VWwzMkNvMDl3SGFF/OCZwaWQ9QXBp"},
  {id: 3, nombre: "Producto C", precio: 700, source: "https://imgs.search.brave.com/eKZ5tr1uBRcfPLf0GUXbCrLV5wfze-3MMW_8ELFc2mk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/bTVlcTNYck9CSUJL/RWR3UGV3TXhnSGFF/SyZwaWQ9QXBp"},
  {id: 4, nombre: "Producto D", precio: 90, source: "https://imgs.search.brave.com/ite-DXzVaFvHczvOwcyQJCJJ9vose9KHRPFkUX1HlJY/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/OU01YzhLbEs0clJy/LWZLc3o5OXNRSGFF/SyZwaWQ9QXBp" },
  {id: 5, nombre: "Producto E", precio: 80, source:  "https://imgs.search.brave.com/2YgiWNk0D4ThicEzD2ZiGvcA1V0FNWU-YLRGlGCRl2M/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/bXdxeGRmaVFSTWZV/WnBzUHhEVVhBSGFF/SyZwaWQ9QXBp"},
  {id: 6, nombre: "Producto F", precio: 150, source:  "https://imgs.search.brave.com/sbGYgCx321wnzvLABeaPEXXF39cM9m3CT80aSahzWfY/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/bHB1UXZ1dGdJZjZv/bzh1WTBfNEpnSGFF/NyZwaWQ9QXBp"},
  {id: 7, nombre: "Producto G", precio: 130, source: "https://imgs.search.brave.com/r2MHHNx6DRtSDiFMsg8_EkFvV70XObJ8cokQ7ClGVVg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/bi1mbDcxcXNucDlx/S2xxNTJZcWx3SGFF/SyZwaWQ9QXBp"},
]


const Productos = () => {
 
  
 
  return (
    <>
    <h2>PRODUCTOS</h2>
        <div className="box grid-responsive">
            
            {
            productos.map(producto => <Producto
              producto={producto}
            />)
            },
          

        </div>

    </>
    

       
  )
}

export default Productos