"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  // const session = getServerSession();
  const router = useRouter();
  const { data: session } = useSession();

  const email = session?.user?.email;
  // console.log(email);

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    createdBy: email,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("https://next-js-ecom-server.vercel.app/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your product has been added",
      showConfirmButton: false,
      timer: 1500,
    });

    // 🔥 Navigate to product list page
    router.push("/allProduct");
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Add New Product</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          onChange={handleChange}
          className="p-2 border"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="p-2 border"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="p-2 border"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="p-2 border"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="p-2 border"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded cursor-pointer"
        >
          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </div>
  );
}
