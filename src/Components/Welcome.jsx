import React from 'react';

export const Welcome = ({ send, orders }) => {
  return (
    <div>
      <p>Taquitos Invisibles</p>
      <p>
        <strong>¡Bienvenidos!</strong>
      </p>
      <p>Pedidos realizados: {orders}</p>
      <img
        src="https://media.istockphoto.com/vectors/taco-mexican-food-vector-id1178826181?b=1&k=6&m=1178826181&s=612x612&w=0&h=_AH2RbHFACUpaZtfWDTF3xDPxQbkjR8_31Y7SvyXjRw="
        className="App-logo"
        alt="logo"
      />
      <button onClick={() => send("CREATE_ORDER")}>Crear orden</button>
    </div>
  );
};