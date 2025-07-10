import React, { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Header title="Application de Débogage" />
      <Counter count={count} onIncrement={increment} />
      <Footer />
    </div>
  );
}

export default App;
