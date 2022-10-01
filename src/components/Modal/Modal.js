
import React, { useEffect, useRef } from 'react'
import { Messages } from 'primereact/messages';

const Modal = () => {

  const message = useRef(null);

  useEffect(() => {
        
    message.current.show({
      severity: 'success', sticky: true, content: (
        <React.Fragment >
          <div className="ml-2" style={{ fontFamily: "Poppins", fontWeight: "500", color: "black", textAlign: "center" }} > Free Delivery over $100. Gift with Purchase over $150.  </div>
        </React.Fragment>
      )
    });

}); 



  return (
    
      <div className="card" style={{ display: "flex", width: "100%", position: "fixed",  flexDirection: "column" }} >
                                  
        <Messages ref={message} />
               
                                                   
      </div>
      
    
  )
}

export default Modal