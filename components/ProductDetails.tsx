"use client";
import { useState } from "react";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export default function ProductDetails({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(0);
  const price = product.default_price as Stripe.Price;
  return (
    <div>
      {product.images && product.images[0] && (
        <div className="relative h-60 w-full">
          <Image
            alt={product.metadata.name}
            src={product.images[0]}
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
          />
        </div>
      )}
      <div>
        <h1>{product.name}</h1>
        {product.description && <p>{product.description}</p>}
        {price && price.unit_amount && (
          <p className="text-lg font-semibold text-gray-900">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </div>
      <div>
        <Button variant="outline">-</Button>
        <span>{quantity}</span>
        <Button variant="outline">+</Button>
      </div>
    </div>
  );
}
