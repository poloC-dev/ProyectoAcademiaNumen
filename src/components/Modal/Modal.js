import React, { useEffect, useRef } from "react";
import { Messages } from "primereact/messages";

const Modal = () => {
  const message = useRef(null);

  useEffect(() => {
    message.current.show({
      severity: "success",
      sticky: true,
      content: (
        <React.Fragment>
          <div
            className="ml-2"
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              color: "black",
              textAlign: "left",
            }}
          >
            {" "}
            Delivery gratis con la compra mayor a $100. Regalo con la compra
            mayor a $150.{" "}
          </div>
        </React.Fragment>
      ),
    });
  });

  return (
    <div
      className="card"
      style={{
        display: "flex",
        width: "100%",
        position: "fixed",
        flexDirection: "column",
        zIndex: "5",
        opacity: 0.95,
      }}
    >
      <Messages ref={message} />
    </div>
  );
};

export default Modal;
