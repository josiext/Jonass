import { Product } from "../types";
import DEFAULT_IMAGE from "../assets/default_img.png";
import { scrollToElement } from "../utils/scrollToElement";
import Tooltip from "rc-tooltip";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Tooltip
      placement="top"
      mouseEnterDelay={0.5}
      overlayStyle={{ maxWidth: "450px", backgroundColor: "#fff", opacity: 1 }}
      overlay={<span>{product.descripcion || "Sin descripción."}</span>}
    >
      <div id={product.nombre} className="max-w-[250px] bg-white rounded-lg">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.imagen || DEFAULT_IMAGE}
            className="w-full h-[200px] object-cover"
            alt={product.nombre}
          />
        </div>
        <div className="px-2 py-4 flex justify-between">
          <span>
            <h3 className="font-semibold">{product.nombre}</h3>
            <p className="text-sm">{product.precio}</p>
          </span>
          <span>
            <button
              className="bg-red-200 px-2 py-2 rounded-md"
              onClick={scrollToElement("contact-container")}
            >
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.0661 0.00560108C0.734519 0.0641683 0.437593 0.265748 0.240644 0.565994C0.0436942 0.866241 -0.0371459 1.24056 0.0159072 1.6066C0.0689602 1.97265 0.251561 2.30044 0.523539 2.51786C0.795516 2.73528 1.13459 2.82452 1.46617 2.76595H5.21687L5.44191 3.45604L6.4671 6.90648L7.49228 10.3569C7.5923 10.7158 8.01738 11.047 8.34244 11.047H17.0941C17.4441 11.047 17.8442 10.7158 17.9442 10.3569L19.9696 3.45604C20.0696 3.09719 19.9196 2.76595 19.5695 2.76595H8.46746L7.51729 0.778499C7.41609 0.550382 7.25982 0.35752 7.0657 0.22115C6.87158 0.0847804 6.64714 0.010193 6.41709 0.00560108L1.41617 0.00560108C1.3413 -0.00186703 1.26598 -0.00186703 1.19112 0.00560108C1.14116 0.00228567 1.09106 0.00228567 1.0411 0.00560108L1.0661 0.00560108ZM8.96756 13.8074C8.26743 13.8074 7.71733 14.4146 7.71733 15.1875C7.71733 15.9604 8.26743 16.5677 8.96756 16.5677C9.66769 16.5677 10.2178 15.9604 10.2178 15.1875C10.2178 14.4146 9.66769 13.8074 8.96756 13.8074ZM16.4689 13.8074C15.7688 13.8074 15.2187 14.4146 15.2187 15.1875C15.2187 15.9604 15.7688 16.5677 16.4689 16.5677C17.1691 16.5677 17.7192 15.9604 17.7192 15.1875C17.7192 14.4146 17.1691 13.8074 16.4689 13.8074Z"
                  fill="#B60A39"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </Tooltip>
  );
}
