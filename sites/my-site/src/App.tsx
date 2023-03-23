import { useState } from "react";
import { BissSpinner } from "my-lib";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <BissSpinner
        blur
        color="red"
        fillColor="yellow"
        position="top-left"
        size="sm"
      ></BissSpinner>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
