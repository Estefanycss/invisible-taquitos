import React from "react";

export const Confirmation = ({ send }) => {
  return (
    <div>
      <p>Taquitos Invisibles</p>
      <p>
        <strong>Tu orden estará lista en ~15min</strong>
      </p>
      <img
        src="https://image.freepik.com/free-vector/sales-printed-receipt-icon-illustration-receipt-paper-flat-icon_385450-14.jpg"
        alt="menu"
      />
      <button onClick={() => send("CLOSE")}>Terminar 👋🏻</button>
    </div>
  );
};
