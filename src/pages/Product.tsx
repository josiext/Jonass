import { Product as IProduct } from "../types";
import { getProducts } from "../api";
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";

export default function Product() {
  const match = useMatch("/product/:name");

  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const name = decodeURI(match?.params.name ?? "");
    const product = await getProducts(decodeURI(name));
    setProduct(product[0]);
  };

  if (!product) return <></>;

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <img alt="coffee" src={product.imagen} width={560} height={640} />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.nombre}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              ${product.precio}
            </h1>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
