"use client";
import SignOutBtn from "@/app/(Auth)/signOut/page";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/allProduct"
          className={`${
            pathname === "/allProduct"
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : ""
          }`}
        >
          All Products
        </Link>
      </li>
      {/* <li>
        <Link
          href="/managedProduct"
          className={`${
            pathname === "/managedProduct"
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : ""
          }`}
        >
          Manage Product
        </Link>
      </li> */}
      <li>
        <Link
          href="/feature"
          className={`${
            pathname === "/feature"
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : ""
          }`}
        >
          Feature
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`${
            pathname === "/about"
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : ""
          }`}
        >
          About Us
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm sticky -top-3 z-50 rounded-4xl mb-5 p-3 ">
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
        <Link href="/">
          <h1 className="text-2xl sm:text-[36px] my-0 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            ShopNexa
          </h1>
        </Link>
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
                <Link
                  href="/addProduct"
                  className={`${
                    pathname === "/addProduct"
                      ? "text-blue-600 font-bold border-b-2 border-blue-600"
                      : ""
                  }`}
                >
                  Add Product
                </Link>
              </li>

              <li>
                <Link
                  href="/managedProduct"
                  className={`${
                    pathname === "/managedProduct"
                      ? "text-blue-600 font-bold border-b-2 border-blue-600"
                      : ""
                  }`}
                >
                  Manage Product
                </Link>
              </li>

              <SignOutBtn />
            </ul>
          </div>
        ) : (
          // <Link href="/api/auth/signin">Sign In</Link>
          <Link href="/login">Sign In</Link>
        )}
      </div>
    </div>
  );
}
