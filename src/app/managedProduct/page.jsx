"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function AllProduct() {
  const { data: session } = useSession();

  // const email = session?.user?.email;
  const email = "aniksarker047@gmail.com";
  const [allProduct, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://next-js-ecom-server.vercel.app/product?email=${email}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [email]);
  return allProduct.length === 0 ? (
    <div className="text-3xl font-bold flex justify-center items-center min-h-screen">
      You have no product. Please add product!!{" "}
    </div>
  ) : (
    <div>
      <h1>My Products : {allProduct.length}</h1>

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
                  <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                    <button className="btn btn-ghost btn-xs">Update</button>
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
