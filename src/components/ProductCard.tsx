import { Link } from "react-router-dom";
import { Product } from "../types";
import DEFAULT_IMAGE from "../assets/default_img.png";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`product/${product.nombre}`}>
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.imagen || DEFAULT_IMAGE}
          className="w-full h-[250px] object-cover"
          alt={product.nombre}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{product.nombre}</h3>
        <p>${product.precio}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500 line-clamp-1">
        {product.descripcion}
      </p>
    </Link>
  );
}
