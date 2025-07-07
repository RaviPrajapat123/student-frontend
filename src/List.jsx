// List.jsx
import React, { useMemo } from "react";
import Item from "./Item";

const List = ({ items }) => {
  // Memoize the full list to avoid re-render on input change
  const renderedList = useMemo(() => {
    return items.map((item) => (
      <Item key={item.id} name={item.name} />
    ));
  }, [items]); // ✅ Only re-render when items change

  return <ul>{renderedList}</ul>;
};

export default List;
