import React from 'react'
import logo from './resources/logo.svg'
import { Button } from 'primereact/button';
import './bannermarca.css';

const BannerMarca = () => {
  return (
    <div className='banner-container banner-bg-pattern'>
      <p className='banner-p'>Our Charity Partner, <br className='banner-br'></br>City Bakery</p>
      
      <div className='banner-logo'>
        <img src={logo} alt="bg"></img>
        
      </div>
      <span>
          <Button label="Learn more about City Bakery" style={{background: "#FF8126", border: "white", borderRadius: "5px", fontFamily: "Poppins", fontWeight: "500", fontSize: "18px", height:'45px', width:'330px', marginTop: "0", zIndex: "0"}} />
      </span>
    </div>
  )
}

export default BannerMarca