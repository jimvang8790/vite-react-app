import React from "react";
import { Fragment, MouseEvent, useState } from "react";

// {items: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: ListGroupProps) => {
  // let selectedIndex = 0; // Managing state
  // The benefits of using a function is that functions can have parameters
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  // Event Handler
  // const handleClick = (event: MouseEvent) => {
  // console.log(event);
  // };

  // Hook: a function that allows us to tap into build in features in react
  const [selectedIndex, setSelectedIndex] = useState(-1); // this is telling react that our componentcan have state that will change over time

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* if item.length = 0 then false/nothing will be render on the screen but if item.length > 0 then display <p> */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
