import React from "react";

export const Order = ({ send }) => {
  return (
    <div>
      <p>Taquitos Invisibles</p>
      <p>
        <strong>Ordena nuestros deliciosos platos</strong>
      </p>
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/199/374/original/mexican-food-menu-hand-drawn-vector-illustration.jpg"
        alt="menu"
      />
      <p>(Interfaz de selección de productos imaginaria 🪄)</p>
      <button onClick={() => send("GO_TO_PAY")}>Pagar</button>
      <button onClick={() => send("CANCEL")} className="secondary">
        Cancelar
      </button>
    </div>
  );
};
