import { Product } from "../types";
import { Container } from "./Container";
import ProductCard from "./ProductCard";
import { Title } from "./Title";

export const Products = ({ products }: { products: Product[] }) => {
  return (
    <Container id="products-container">
      <Title className="mt-12">Pasteles</Title>
      <div className="mx-auto grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </Container>
  );
};
