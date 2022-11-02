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
          <img className="logo" alt="Logo" src={require('../Footer/images/logo.png')}/>
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
