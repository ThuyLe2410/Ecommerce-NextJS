"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, X, Menu } from "lucide-react";
import { useCartStore } from "./store/cart-store";
import { Button } from "./ui/button";

export default function Navbar() {
  const { items } = useCartStore();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 786) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, [setMobileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="hover:text-blue-600">
          {" "}
          My Ecommerce
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev: boolean) => !prev)}>
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <Link href="/" className="block hover:text-blue-600">
              Home
            </Link>

            <Link href="/products" className="block hover:text-blue-600">
              Products
            </Link>
            <Link href="/checkout" className="block hover:text-blue-600">
              Checkout
            </Link>
          </ul>
        </nav>
      )}
    </nav>
  );
}
