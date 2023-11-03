import React from "react";
import { Fragment } from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
  // The benefits of using a function is that functions can have parameters
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  return (
    <>
      <h1>List</h1>
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* if item.length = 0 then false/nothing will be render on the screen but if item.length > 0 then display <p> */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
