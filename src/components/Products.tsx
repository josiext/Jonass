import { useState } from "react";
import { Product } from "../types";
import { Container } from "./Container";
import ProductCard from "./ProductCard";
import { Title } from "./Title";
import { Dialog } from "@headlessui/react";
import DEFAULT_IMAGE from "../assets/default_img.png";

export const Products = ({ products }: { products: Product[] }) => {
  const [itemSelected, setItemSelected] = useState<Product | null>(null);

  return (
    <Container id="products-container">
      <Title className="mt-12">Pasteles</Title>
      <div className="mx-auto grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => setItemSelected(product)}
          />
        ))}
      </div>

      <Dialog
        open={itemSelected !== null}
        onClose={() => setItemSelected(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="mx-auto rounded min-w-[350px] max-w-sm bg-white w-[90%] max-h-[90%] p-4 overflow-y-auto sm:min-h-[600px] sm:max-w-none sm:w-[450px] lg:w-[540px]">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={itemSelected?.imagen || DEFAULT_IMAGE}
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-between min-h-[250px]">
              <span className="block">
                <h2 className="text-2xl font-semibold mt-4">
                  {itemSelected?.nombre}
                </h2>
                <div className="h-0.5 bg-neutral-900" />
                <p className="mt-4 text-neutral-600 text-sm italic">
                  {itemSelected?.descripcion || "Sin descripción..."}
                </p>
              </span>

              <button
                className="mt-4 text-sm py-2 px-6 bg-red-600 rounded-lg text-white font-semibold"
                onClick={() => setItemSelected(null)}
              >
                Aceptar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Container>
  );
};
