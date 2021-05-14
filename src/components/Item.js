import React, {useState} from "react";

function Item({ name, category }) {
  const [itemAdd, setItemAdd] = useState(false)
  function addItemFunction() {
    setItemAdd(!itemAdd)
  }


  return (
    <li className={itemAdd ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItemFunction} className="add">{itemAdd ? "Item Added" : "Add to Cart" }</button>
    </li>
  );
}