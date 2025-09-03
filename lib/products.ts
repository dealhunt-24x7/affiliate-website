import productsData from "../data/products.json";
import { Product } from "./types";

export const getProducts = (): Product[] => {
  return productsData;
};

export const getProductById = (id: number): Product | undefined => {
  return productsData.find((product) => product.id === id);
};
