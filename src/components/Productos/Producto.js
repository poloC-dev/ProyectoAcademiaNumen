import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const Producto = ({producto}) => {
 
    const {nombre, precio, source } = producto;

    const header = (
      <img alt="Card" src={source} />
      );
    const footer = (
      <span>
          <Button label="Agregar al carrito" icon="pi pi-check" />
          <Button label="Comprar Ahora" className="p-button-secondary ml-2" />
      </span>
  );
   
    return (
           
          <Card title={nombre} style={{ width: '25rem', marginBottom: '2em' }} footer={footer} header={header}>
             <h4 className="m-0" style={{lineHeight: '1.5'}}>Descripcion producto</h4>
          
             <h3>$ {precio}</h3>
          </Card> 
            
         
    )
  }

    
  export default Producto