import { useContext } from "react"; //hook used to consume the context data
import { ProductsContext, UserContext } from "../App"; // context we have created.
import CompE from "./CompE";

const CompD = () => {
  //CONSUME THE CONTEXT
  const products = useContext(ProductsContext);
  return (
    <div>
      <h1>Comp D</h1>
      {!!products.length &&
        products.map((product) => {
          return <div>Product Name: {product.name}</div>;
        })}
      <CompE />
    </div>
  );
};

export default CompD;
