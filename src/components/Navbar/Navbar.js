import React, {useState, useEffect} from 'react'
import 'primeicons/primeicons.css';
import './Navbar.css'



export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
  
      }, [])



    return (
        <div className="navcontainer">
          <img className="logo" alt="Logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8687897-418c-40db-b92b-af479b5b1cb6/d317hqy-3ed150a3-4955-420c-8403-287ddd5e5a1e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4Njg3ODk3LTQxOGMtNDBkYi1iOTJiLWFmNDc5YjViMWNiNlwvZDMxN2hxeS0zZWQxNTBhMy00OTU1LTQyMGMtODQwMy0yODdkZGQ1ZTVhMWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ulQpVrSkW5eHe4Qh2yPtw-B_tiHay5Etn2Z7qOXH878"/>
          <nav>
            {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
            <li className="items">Inicio</li>
            <li className="items">Productos</li>
            <li className="items">Contacto</li>
            <li className="items">
              <i className="pi pi-shopping-cart" style={{fontSize: "1.5rem"}} ></i>
            </li>
          </ul>
            )}
      
            <button onClick={toggleNav} className="btn">
              <i className="pi pi-bars"></i>
            </button>
          </nav>
        </div>
      )

 

}
