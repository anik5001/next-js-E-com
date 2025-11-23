import LoginBtn from "@/app/(Auth)/login/page";
import { User } from "lucide-react";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/allProduct">All Products</Link>
      </li>
      <li>
        <Link href="/">Feature</Link>
      </li>
      <li>
        <Link href="/">About Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mr-10">
        {/* <Link href="/login" className="btn">
          Login
        </Link> */}

        {session ? (
          <div className="dropdown dropdown-hover dropdown-end relative">
            <div tabIndex={0} role="button" className="m-1">
              <img
                className="w-10 h-10 rounded-full"
                src={session?.user?.image}
                alt="Profile"
              />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[999] p-3 shadow w-48"
            >
              <li className="text-xl text-center font-bold pointer-events-none">
                {session?.user?.name}
              </li>

              <li className="text-center text-gray-500 pointer-events-none">
                {session?.user?.email}
              </li>

              <li>
                <Link href="/add-product">Add Product</Link>
              </li>

              <li>
                <Link href="/manage-product">Manage Product</Link>
              </li>

              <LoginBtn />
            </ul>
          </div>
        ) : (
          <a href="/api/auth/signin">Sign In</a>
        )}
      </div>
    </div>
  );
}
