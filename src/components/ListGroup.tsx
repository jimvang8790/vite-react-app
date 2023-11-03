import React from "react";
import { Fragment } from "react";

const ListGroup = () => {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items.map((item) => {
  //     <li>{item}</li>;
  //   });
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
