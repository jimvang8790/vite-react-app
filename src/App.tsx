import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log("item", item);
  };

  return (
    <div className="App">
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
