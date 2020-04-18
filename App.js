import React, { useState } from "react";

function App() {
  const [descriptions, setDescriptions] = useState([]);
  return (
    <div className="App">
      <p>Eu cliquei!!!! Mas.... {descriptions} </p>
      <button onClick={() => setDescriptions(descriptions + 1)}>
        Clique aqui
      </button>
      <input type="text" />
    </div>
  );
}

export default App;
