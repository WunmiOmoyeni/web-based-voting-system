// src/app/admin-login/page.tsx
'use client';
import React from 'react';

const AdminLogin: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admin Login</h2>
      <form className="flex flex-col items-center bg-white p-6 rounded shadow-md">
        <input
          type="text"
          placeholder="Admin Email"
          className="mb-4 p-3 border rounded w-64"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
          Login
        </button>
      </form>
    </main>
  );
};

export default AdminLogin;
