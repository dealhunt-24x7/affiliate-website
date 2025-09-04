"use client";

import React from "react"; import ProductCard from "./ProductCard"; import { BaseProduct } from "@/types/product";

interface Props { products: BaseProduct[]; title: string; }

const HorizontalProductRow: React.FC<Props> = ({ products, title }) => { return ( <section className="mb-8"> <h2 className="text-xl font-bold mb-3">{title}</h2> <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2"> {products.slice(0, 25).map((p, idx) => ( <div key={p.id ?? idx} className="min-w-[220px]"> <ProductCard product={p} /> </div> ))} </div> </section> ); };

export default HorizontalProductRow;

