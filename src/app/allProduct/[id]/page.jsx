import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function page({ params }) {
  const session = await getServerSession();
  const { id } = await params;
  const res = await fetch(
    `https://next-js-ecom-server.vercel.app/products/${id}`
  );
  const product = await res.json();
  // console.log(product);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Product Card */}
      <div className="bg-white rounded-xl shadow p-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold">{product.title}</h2>

        <p className="mt-2 text-gray-600">{product.description}</p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="line-through text-gray-400">
            ${product.oldPrice}
          </span>
        </div>

        <p className="mt-2 text-yellow-600 font-semibold">
          ⭐ {product.rating}
        </p>

        <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
      {/* Back Button */}
      <Link
        href="/allProduct"
        className="inline-block mt-5 text-center text-blue-600 hover:underline"
      >
        ← Back to Products
      </Link>
    </div>
  );
}
