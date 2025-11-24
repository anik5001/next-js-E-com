"use client";
import { ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
// ("use client");

import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function AllProduct() {
  const [allProduct, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://next-js-ecom-server.vercel.app/products", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // export default async function page() {
  // const res = await fetch("https://next-js-ecom-server.vercel.app/products");
  // const allProduct = await res.json();
  return (
    <div>
      <h1>All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProduct.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col"
          >
            {/* Image Area */}
            <div className="relative h-64 bg-slate-100 overflow-hidden">
              {/* Placeholder for actual image - using a colored div if image fails, normally use Next/Image */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                {/* Replace this img with <Image /> in production */}
                {/* <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                /> */}
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                  <Star size={14} fill="currentColor" /> {product.rating}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>

              <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs line-through">
                    {product.oldPrice ? `$${product.oldPrice}` : ""}
                  </span>
                  <span className="text-xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                </div>
                <p className="bg-slate-900 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:ring-4 focus:ring-blue-200">
                  <ShoppingBag />
                </p>
              </div>
              <div className="pt-5 w-full">
                <Link
                  className=" w-full btn btn-primary"
                  href={`allProduct/${product._id}`}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
