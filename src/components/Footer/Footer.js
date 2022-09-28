import React from 'react'
import "./footer.css"
import imagen from "./images/logo.png";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <span style={{ backgroundImage: `url(${imagen})`, backgroundSize: 110}} className="logo">
      </span>

      <ul>
        <li className="title">Occasions</li>
        <li className="list">Occasions</li>
        <li className="list">Working From Home</li>
        <li className="list">Snack Time</li>
        <li className="list">Breakfast</li>
        <li className="list">Vegan Life</li>
        <li className="list">Baking</li>
        <li className="list">Gifts & Bundles</li>
        <li className="list">Easy Cooking</li>
        <li className="list">All Products</li>
      </ul>

      <ul>
        <li className="title">All Categories</li>

        <li className="list">Baking</li>
        <li className="list">Breakfast</li>
        <li className="list">Condiments</li>
        <li className="list">Drinks</li>
        <li className="list">Heat Things Up</li>
        <li className="list">Meal Solutions</li>
        <li className="list">Pantry Staples</li>
        <li className="list">Simmer Sauces</li>
        <li className="list">Snacks & Treats</li>
        <li className="list">Spice Up Your Cooking</li>
        <li className="list">Sweet Tooth</li>
        <li className="list">Wine & Cheese</li>
        <li className="list">All Products</li>
      </ul>

      <ul>
        <li className="title">Gifts & Bundles</li>

        <li className="list">Sweet Tooth Special</li>
        <li className="list">Discover Local</li>
        <li className="list">Baking Box</li>
        <li className="list">Spicy Heat Lover's Box</li>
        <li className="list">Snacking Sensations</li>
      </ul>

      <ul>
        <li className="title">Our Brands</li>
      </ul>

      <ul>
        <li className="title">About Us</li>
      </ul>

    </div>
    
    </>
    
    
  )
}

export default Footer