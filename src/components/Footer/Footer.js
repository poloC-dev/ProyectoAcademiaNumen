import React from 'react'
import "./footer.css"
import imagen from "./images/logo.png";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <span style={{ backgroundImage: `url(${imagen})`, backgroundSize: 110}} className="logo">
      </span>

      <ul>
        <li className="titleF">Occasions</li>

        <li className="listF">Occasions</li>
        <li className="listF">Working From Home</li>
        <li className="listF">Snack Time</li>
        <li className="listF">Breakfast</li>
        <li className="listF">Vegan Life</li>
        <li className="listF">Baking</li>
        <li className="listF">Gifts & Bundles</li>
        <li className="listF">Easy Cooking</li>
        <li className="listF">All Products</li>
      </ul>

      <ul>
        <li className="titleF">All Categories</li>

        <li className="listF">Baking</li>
        <li className="listF">Breakfast</li>
        <li className="listF">Condiments</li>
        <li className="listF">Drinks</li>
        <li className="listF">Heat Things Up</li>
        <li className="listF">Meal Solutions</li>
        <li className="listF">Pantry Staples</li>
        <li className="listF">Simmer Sauces</li>
        <li className="listF">Snacks & Treats</li>
        <li className="listF">Spice Up Your Cooking</li>
        <li className="listF">Sweet Tooth</li>
        <li className="listF">Wine & Cheese</li>
        <li className="listF">All Products</li>
      </ul>

      <ul>
        <li className="titleF">Gifts & Bundles</li>

        <li className="listF">Sweet Tooth Special</li>
        <li className="listF">Discover Local</li>
        <li className="listF">Baking Box</li>
        <li className="listF">Spicy Heat Lover's Box</li>
        <li className="listF">Snacking Sensations</li>
      </ul>

      <ul>
        <li className="titleF">Our Brands</li>
      </ul>

      <ul>
        <li className="titleF">About Us</li>
      </ul>

    </footer>
    
    </>
    
    
  )
}

export default Footer