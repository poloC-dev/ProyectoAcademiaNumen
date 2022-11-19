import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const CartItem = ({ data, deleteFromCart, addToCart }) => {
  const { id, name, price, quantity } = data;
  const footer = (
    <span>
      <Button
        icon="pi pi-times"
        className="p-button-warning p-c p-button-rounded"
        onClick={() => deleteFromCart(id)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-danger mx-3 p-c p-button-rounded lg: mx-3"
        onClick={() => deleteFromCart(id, true)}
      />
      <Button
        icon=" pi pi-plus"
        className="p-button-success p-c p-button-rounded"
        onClick={() => addToCart(id)}
      />
    </span>
  );
  return (
    <Card className="w-6 lg:w-3 mx-1" footer={footer}>
      <h4>{name}</h4>
      <h5>
        ${price} x {quantity} = ${price * quantity}
      </h5>
    </Card>
  );
};

export default CartItem;
