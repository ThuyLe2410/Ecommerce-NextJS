

import React from "react";
import { stripe } from "@/lib/stripe";
import ProductDetails from "@/components/ProductDetails"

export default async function ProductPage({
  params}: {
    params:Promise< { id: string }>,
  },
) {
  const {id} = await params
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  console.log('product details', product)
  const plainProduct = JSON.parse(JSON.stringify(product))
  return <ProductDetails product={plainProduct}/>;
}
