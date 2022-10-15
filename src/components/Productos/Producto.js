import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Productos.css'

const Producto = ({data, addToCart}) => {
 
    const {id, name, price, discount, url } = data;

    const header = (
      <img alt="Card" src={url} style={{height:'180px', width:'270px'}}/>
      );
    const footer = (
      <span>
          <Button onClick={() => addToCart(id)} className="button-demo" label="Comprar" style={{background: "#FF8126", border: "white", borderRadius: "5px", fontFamily: "Roboto", fontWeight: "500", fontSize: "18px", height:'40px', width:'230px', marginTop: "0px", zIndex: "0"}} />
          
      </span>
  );
   
    return (
           
          <Card title={name}  style={{ paddingTop: "0px", background: "#F7F5F0", width: '270px', height: 'auto', marginBottom: '1em', marginTop: '0.5em', color: "#1F1F1F", fontFamily: "Roboto", fontWeight: "300", fontSize: "100%" }} footer={footer} header={header}>
                   
               <h4 style={{fontWeight: "600", fontSize: "22px", color: "grey", marginTop: "0px", textDecoration: "line-through"}} > Precio: $ {price}   </h4>
               <h4 style={{fontWeight: "800", fontSize: "22px", color: "#ff8126", marginTop: "2px"}} >Promo: $ {discount}   </h4>
            
          </Card> 
            
         
    )
  }

    
  export default Producto