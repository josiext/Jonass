import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { Product } from "./types";
import { getProducts } from "./api";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Title } from "./components/Title";
import { Container } from "./components/Container";

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

  const scrollHandler = (e: any) => {
    e.preventDefault();
    coffeeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <Container className="min-h-screen">
        <Title>Crafted by us, for you</Title>
        <div className="grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10">
          {data.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </Container>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
