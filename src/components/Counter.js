import React from "react";

function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Valeur actuelle : {count}</p>
      <button onClick={onIncrement}>Incrémenter</button>
    </div>
  );
}

export default Counter;
