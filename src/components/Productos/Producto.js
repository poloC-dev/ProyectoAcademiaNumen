import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const Producto = ({producto}) => {
 
    const {nombre, precio, source } = producto;

    const header = (
      <img alt="Card" src={source} style={{height:'180px', width:'270px'}}/>
      );
    const footer = (
      <span>
          <Button label="Quick Shop" style={{background: "#FF8126", border: "white", borderRadius: "5px", fontFamily: "Poppins", fontWeight: "500", fontSize: "18px", height:'40px', width:'230px', marginTop: "0", zIndex: "0"}} />
          
      </span>
  );
   
    return (
           
          <Card title={nombre} style={{ padding: "0", background: "#F7F5F0", width: '270px', height: '420px', marginBottom: '1em', marginTop: '0px', color: "#1F1F1F", fontFamily: "Poppins", fontWeight: "300", fontSize: "18px" }} footer={footer} header={header}>
             <h4 className="m-0" style={{lineHeight: '1', marginBottom: "10px", padding: "0px"}}>Descripcion producto</h4>
          
             <h3 style={{fontWeight: "600", fontSize: "24px", color: "#ff8126", marginTop: "10px"}} >$ {precio}   </h3>
          </Card> 
            
         
    )
  }

    
  export default Producto