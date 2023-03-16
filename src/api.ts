import axios from "axios";
import Papa from "papaparse";

import { Product } from "./types";

const DOC_LINK =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbxdS4rJLn1aKwujscBc4IYGtKpZO-jr3M-jcNtHlQ5YqNGkE8IP5SgXs7YlwsdXIdr-MSHlVT8HsB/pub?output=csv";

export const getProducts = async (name?: string) => {
  const response = await axios.get(DOC_LINK, {
    responseType: "blob",
  });

  const products: Product[] = await new Promise((resolve) => {
    Papa.parse(response.data, {
      header: true,
      complete: function (results: any) {
        resolve(results.data as Product[]);
      },
    });
  });

  if (name) return products.filter((product) => product.nombre === name);
  return products;
};
