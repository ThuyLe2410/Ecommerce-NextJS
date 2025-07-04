"use client";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";


interface Props {
  products: Stripe.Product[];
}

export default function CarouselProduct({ products }: Props) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;
  
  const nextSlide= () => {
    setCurrent((prev) => (prev+1) % products.length)
  };

  console.log('current', current)

  const prevSlide = () => {
    setCurrent((prev) => (prev-1+products.length) % products.length)
  }

  return (
    <Card className="w-full relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full overflow-hidden">
           <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>

         <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
          >
            <svg className="w-5 h-5 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
          >
            <svg className="w-5 h-5 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      
      <CardContent className="p-6 space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-gray-800 leading-tight line-clamp-2">
            {currentProduct.name}
          </CardTitle>
          {price && price.unit_amount && (
            <div className="flex flex-col items-end">
              <p className="text-2xl font-bold text-green-600">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                {price.currency?.toUpperCase()}
              </p>
            </div>
          )}
        </div>

        {/* Product Description (if available) */}
        {currentProduct.description && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {currentProduct.description}
          </p>
        )}

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 pt-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-blue-500 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4">
          View Details
        </button>
      </CardContent>
    </Card>
  );
}
