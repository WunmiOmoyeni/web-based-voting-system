// src/app/student-login/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router for navigation

const StudentLogin: React.FC = () => {
  const router = useRouter();
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a login (validation logic or API call can be added here)
    if (matricNumber && password) {
      router.push("/student-dashboard");
    } else {
      alert("Please fill in your login details.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Student Login
      </h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center bg-white p-6 rounded shadow-md"
      >
        <input
          type="text"
          placeholder="Enter your Matric Number"
          value={matricNumber}
          onChange={(e) => setMatricNumber(e.target.value)}
          className="mb-4 p-3 border rounded w-64"
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-3 border rounded w-64"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-500 shadow-md"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default StudentLogin;
