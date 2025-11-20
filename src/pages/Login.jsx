import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/admin";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm"
      >
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Domnick Seeds Logo" className="h-12 w-auto" />
        </div>
        <h1 className="text-lg font-semibold mb-4 text-center text-slate-900">
          Domnick Seeds Login
        </h1>

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
        )}

        <label className="block mb-3 text-sm">
          <span className="block text-slate-600 mb-1">Email</span>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-dsGreen"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block mb-4 text-sm">
          <span className="block text-slate-600 mb-1">Password</span>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-dsGreen"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-dsGreen text-white py-2 rounded-md text-sm font-medium hover:bg-dsDarkGreen"
        >
          Log in
        </button>

        <p className="mt-3 text-[11px] text-slate-500 text-center">
          Use the email and password you created in the Supabase Auth users
          page. Admins will be routed to the Admin Portal.
        </p>
      </form>
    </div>
  );
}
