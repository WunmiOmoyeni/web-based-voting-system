// src/app/Login.tsx
'use client'
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [matricOrEmail, setMatricOrEmail] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the login details to the backend
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ matricOrEmail, role }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Login successful!');
      // Redirect to the appropriate page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">

        <input
          type="text"
          placeholder="Enter Matric Number or Email"
          value={matricOrEmail}
          onChange={(e) => setMatricOrEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
