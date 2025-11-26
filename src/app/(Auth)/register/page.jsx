"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    image: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("https://next-js-ecom-server.vercel.app/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setLoading(false);
      router.push("/login");
    } else {
      setError("Registration failed!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create a New Account
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg font-semibold"
          >
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              " Register"
            )}
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
