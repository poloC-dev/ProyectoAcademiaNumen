import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import './Productos.css'


const Producto = ({data, addToCart}) => {
 
    const {id, name, price, discount, url } = data;

    const header = (
      <img alt="Card" src={url} style={{height:'180px', width:'270px'}}/>
      );
    const footer = (
      <span>
          <Button onClick={() => addToCart(id)} icon="pi pi-shopping-cart" className="p-button-warning" label="Comprar"  style={{ fontFamily: "Roboto", fontWeight: "500", fontSize: "18px", height:'40px', width:'230px', marginTop: "0px", }}  />
          
      </span>
  );
   
    return (
           
          <Card title={name}   footer={footer} header={header}>
                   
               <h4 style={{fontWeight: "600", fontSize: "22px", color: "grey", marginTop: "0px", textDecoration: "line-through"}} > Precio: $ {price}   </h4>
               <h4 style={{fontWeight: "800", fontSize: "22px", color: "#ff8126", marginTop: "2px"}} >Promo: $ {discount}   </h4>
            
          </Card> 
            
         
    )
  }

    
  export default Producto