import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

import  Modal  from './components/Modal';
import  Navbar  from './components/Navbar';
import  HeroBanner  from './components/HeroBanner';
import  Productos  from './components/Productos';
import  Iconos  from './components/Iconos';
import  Seccion1 from './components/Seccion1';
import  BannerMarca from './components/BannerMarca';
import  Seccion2 from './components/Seccion2';
import  Carousel from './components/Carousel';
import  RedesList from './components/RedesList';
import  Contacto from './components/Contacto';
import  Testimonios from './components/Testimonios';
import  ProductosDestacados from './components/ProductosDestacados';
import  Footer from './components/Footer';
import  IconoWsp from './components/IconoWsp';
import  Empleados from './components/Empleados';



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
