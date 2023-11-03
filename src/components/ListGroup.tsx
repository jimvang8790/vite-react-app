import React from "react";
import { Fragment, MouseEvent } from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // The benefits of using a function is that functions can have parameters
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  // Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List</h1>
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* if item.length = 0 then false/nothing will be render on the screen but if item.length > 0 then display <p> */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
