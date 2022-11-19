import React from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Productos from "./components/Productos/Productos";
import Iconos from "./components/Iconos/Iconos";
import Seccion1 from "./components/Seccion1/Seccion1";
import BannerMarca from "./components/BannerMarca/BannerMarca";
import Carousel from "./components/Carousel/Carousel";
import RedesList from "./components/RedesList/RedesList";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/context";

function App() {
  return (
    <>
      <CartContextProvider>
        <Modal />
        <Navbar />
        <HeroBanner />
        <Productos />
        <Iconos />
        <Seccion1 />
        <BannerMarca />
        <Carousel />
        <Contacto />
        <RedesList />
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
