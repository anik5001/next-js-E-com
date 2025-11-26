"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const dynamic = "force-dynamic";

export default function AllProduct() {
  const { data: session } = useSession();

  const email = session?.user?.email;
  // const email = "aniksarker047@gmail.com";
  const [allProduct, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://next-js-ecom-server.vercel.app/product?email=${email}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [email, setLoading]);

  const handleDelete = async (id) => {
    // console.log("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `https://next-js-ecom-server.vercel.app/my-product/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = res.json();

        const existingData = allProduct.filter((p) => p._id !== id);
        setProducts(existingData);
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });

    // alert("Product delete Successfully!");

    // 🔥 Navigate to product list page
  };
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  return allProduct.length === 0 ? (
    <div className="text-3xl font-bold flex justify-center items-center min-h-screen">
      You have no product. Please add product!!{" "}
    </div>
  ) : (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold my-5 ">
        My Products : <span className="text-primary">{allProduct.length}</span>
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SI NO</th>
                <th>Name</th>
                <th>Price</th>
                <th>CreatedBy</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allProduct.map((product, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={product.image} alt={product.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$ {product.price}</td>
                  <td>{product.createdBy}</td>
                  <th className="flex gap-2">
                    <Link
                      className="  btn "
                      href={`managedProduct/${product._id}`}
                    >
                      View details
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn  "
                    >
                      Delete
                    </button>
                    <button className="btn  ">Update</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
