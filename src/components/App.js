
function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState(false)

  function handleClick(){
    console.log("clicked!")
    setIsDark((isDark) => !isDark)
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (isDark ? "App dark" : " App light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
};

