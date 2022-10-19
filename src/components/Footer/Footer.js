import React from 'react'
import "./footer.css"
import imagen from "./images/logo.png";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <span style={{ backgroundImage: `url(${imagen})`, backgroundSize: 110}} className="logoFooter">
      </span>

      <ul className="listF">
        <li className="titleF">Occasions</li>

        <a href="google.com">Occasions</a>
        <a href="google.com">Working From Home</a>
        <a href="google.com">Snack Time</a>
        <a href="google.com">Breakfast</a>
      </ul>

      <ul className="listF"> 
        <li className="titleF">All Categories</li>

        <a href="google.com">Baking</a>
        <a href="google.com">Breakfast</a>
        <a href="google.com">Condiments</a>
        <a href="google.com">Drinks</a>
      </ul>

      <ul className="listF">
        <li className="titleF">Gifts & Bundles</li>

        <a href="google.com">Sweet Tooth Special</a>
        <a href="google.com">Discover Local</a>
        <a href="google.com">Baking Box</a>
        <a href="google.com">Spicy Heat Lover's Box</a>
      </ul>

      <ul className="listF mapFooter">
        <li className="titleF titleLocation">Location</li>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.218855333479!2d-3.607488884914922!3d37.076094059820626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fa9913a33da7%3A0x7778885ab9d59ed7!2sRestaurante%20Casa%20Ana%20Las%20Mimbres!5e0!3m2!1ses-419!2ses!4v1665838616283!5m2!1ses-419!2ses"
              width="500"
              height="250"
              frameBorder="0"
              style={{ border:0}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="map"
              className='mapOnly'
            />
      </ul>

    </footer>
    
    </>
    
    
  )
}

export default Footer