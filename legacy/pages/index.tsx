import { useRef } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Papa from "papaparse";
import { Product } from "./products/types";

const DOC_LINK =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlTuh4wcDhnwmHdgzkyD1rNI_HeCy2Hhha5gu237IxiYB7MQEb4xw1X3qkkYqSP3d46vBhbgAS2rDg/pub?output=csv";

export default function Gallery({ data }) {
  const coffeeRef = useRef<HTMLParagraphElement>();

  const scrollHandler = (e) => {
    e.preventDefault();
    coffeeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={coffeeRef}
            >
              Crafted by us, for you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(DOC_LINK, {
    responseType: "blob",
  });

  const products: Product[] = await new Promise((resolve) => {
    Papa.parse(response.data, {
      header: true,
      complete: function (results) {
        resolve(results.data as Product[]);
      },
    });
  });

  return {
    props: {
      data: products,
    },
  };
}
