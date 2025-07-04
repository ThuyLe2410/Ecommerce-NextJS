import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"
import CarouselProduct from "@/components/Carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  console.log("product", products);
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Store</h2>
            <p className="text-lg text-gray-600 mb-4">Discover out products</p>
            <Button>
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Image className="rounded" alt="Banner image" width={450} height={450} src={products.data[0].images[0]}/>
        </div>
      </section>

      <section className="p-8 flex justify-center">
        <CarouselProduct products={products.data} />
      </section>
    </div>
  );
}
