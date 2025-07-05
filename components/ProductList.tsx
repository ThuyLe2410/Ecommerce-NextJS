"use client"
import {useState} from "react";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface Props {
  products: Stripe.Product[];
}
export default function ProductList({ products }: Props) {
    const [searchItem, setSearchItem] = useState<string>("") 
    const filterProducts = products.filter((product)=> {
        const item = searchItem.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(item);
        const descriptionMatch = product.description?.toLowerCase().includes(item)
        return nameMatch || descriptionMatch
    })

  return (
    <div>
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filterProducts.map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
