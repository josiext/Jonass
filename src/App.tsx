import { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import { Product } from "./types";
import { getProducts } from "./api";
import Contact from "./components/Contact";
import { Products } from "./components/Products";

function App() {
  const [data, setData] = useState<Product[]>([]);
  const coffeeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const products = await getProducts();
    setData(products);
  };

  return (
    <>
      <Home />
      <Products products={data} />
      <Contact />
    </>
  );
}

export default App;
