"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    // console.log("SIGN IN RESPONSE:", res); // Debug 🔍

    if (res?.error) {
      setError("Invalid email or password!");
      setLoading(false);

      return;
    }
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {error && <p className="text-red-500 text-center mb-4 ">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              "Login"
            )}
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-4">
          <button
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
            }}
            className="w-full bg-red-500 text-white cursor-pointer py-3 rounded-lg font-semibold"
          >
            Continue with Google
          </button>
        </div>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
