import { useContext } from "react"; //hook used to consume the context data
import { ProductsContext } from "../App"; // context we have created.

const CompE = () => {
  const products = useContext(ProductsContext);

  return (
    <div>
      <h1>Comp E</h1>
      {!!products.length &&
        products.map((product) => {
          return <div>Product Name: {product.name}</div>;
        })}
    </div>
  );
};

export default CompE;
