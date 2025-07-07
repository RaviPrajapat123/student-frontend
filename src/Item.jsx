// Item.jsx
import React from "react";

const Item = React.memo(({ name }) => {
  console.log("Rendered:", name); // 👈 debugging
  return <li>{name}</li>;
});

export default Item;
