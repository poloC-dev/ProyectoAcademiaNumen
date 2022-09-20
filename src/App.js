import './App.css';
import  Modal  from './components/Modal/Modal';
import  Navbar  from './components/Navbar/Navbar';
import  HeroBanner  from './components/HeroBanner/HeroBanner';
import  Productos  from './components/Productos/Productos';
import  Iconos  from './components/Iconos/Iconos';
import  Seccion1 from './components/Seccion1/Seccion1';
import  BannerMarca from './components/BannerMarca/BannerMarca';
import  Seccion2 from './components/Seccion2/Seccion2';
import  Carousel from './components/Carousel/Carousel';
import  RedesList from './components/RedesList/RedesList';
import  Contacto from './components/Contacto/Contacto';
import  Testimonios from './components/Testimonios/Testimonios';
import  ProductosDestacados from './components/ProductosDestacados/ProductosDestacados';
import  Footer from './components/Footer/Footer';
import  IconoWsp from './components/IconoWsp/IconoWsp';
import  Empleados from './components/Empleados/Empleados';



function App() {
  return (
    <div>
      <Modal />
      <Navbar />
      <HeroBanner />
      <Productos />
      <Iconos />
      <Seccion1 />
      <BannerMarca />
      <Seccion2 />
      <Carousel />
      <Empleados />
      <ProductosDestacados  />
      <Testimonios />
      <Contacto />
      <RedesList />
      <IconoWsp />
      <Footer />
    </div>
  );
}

export default App;
