import { useState, createContext } from "react";
import CompA from "./Components/CompA";
import CompD from "./Components/CompD";

//CREATE THE CONTEXT;
export const ProductsContext = createContext(null);
export const UserContext = createContext(null);

function App() {
  const [products, setProducts] = useState([
    {
      id: "1AAA12",
      name: "Iphone 14",
      category: "Mobile",
      price: "71,999",
      description: "",
    },
    {
      id: "2AA12",
      name: "Iphone 14 Pro",
      category: "Mobile",
      price: "1,19,999",
      description: "",
    },
    {
      id: "3AAA12",
      name: "Iphone 14 Pro Max",
      category: "Mobile",
      price: "1,39,999",
      description: "",
    },
    {
      id: "4AAA12",
      name: "Iphone 13 Pro ",
      category: "Mobile",
      price: "1,09,999",
      description: "",
    },
  ]);

  return (
    <div className="App">
      {/* PROVIDE THE CONTEXT */}
      <ProductsContext.Provider value={products}>
        <CompA />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;

// export default -> has to be given to only one entity (function, class, variable) in the same file
// export -> export as many entities in the same file
