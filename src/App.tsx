import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div className="App">
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}

export default App;
