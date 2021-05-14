import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory] = useState("All")

  let filtaFish = value => {
    setselectedCategory(value)
    console.log("LAST VALUE", value)
  }

  const filteredItems = items.filter(item => {
      if (selectedCategory === "All") {
        return item} else {
          return item.category === selectedCategory
        }

  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={e => filtaFish(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>