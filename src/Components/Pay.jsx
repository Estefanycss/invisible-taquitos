import React from "react";

export const Pay = ({ send }) => {
  return (
    <div>
      <p>Taquitos Invisibles</p>
      <p>
        <strong>Sin paguito no hay taquitos</strong>
      </p>
      <img
        src="https://media.istockphoto.com/vectors/doodle-cash-flow-raining-money-seamless-vector-pattern-falling-sketch-vector-id813040858?k=6&m=813040858&s=612x612&w=0&h=fQEWQBPOhSQ1zJfaYd7JCgiPAqnUCD1SBLoirKhQ_Rg="
        alt="menu"
      />
      <p>(Interfaz de pago imaginaria 🪄)</p>
      <button onClick={() => send("SUCCESS")}>Completar pago</button>
      <button onClick={() => send("RETURN")} className="secondary">
        Volver a mi orden
      </button>
      <button onClick={() => send("CANCEL")} className="secondary">
        Cancelar
      </button>
    </div>
  );
};
