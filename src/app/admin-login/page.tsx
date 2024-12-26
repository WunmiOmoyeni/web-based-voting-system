// src/app/admin-login/page.tsx
"use client";

import React, { useState } from "react";

interface Position {
  name: string;
  candidates: string[];
}

const AdminLogin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [positions, setPositions] = useState<Position[]>([
    { name: "Executive President", candidates: [] },
    { name: "Vice President", candidates: [] },
    { name: "Treasurer", candidates: [] },
    { name: "Financial Secretary", candidates: [] },
    { name: "General Secretary", candidates: [] },
    { name: "Sports Director", candidates: [] },
    { name: "Social Director", candidates: [] },
    { name: "PRO", candidates: [] },
    { name: "Welfare Director", candidates: [] },
  ]);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [candidateName, setCandidateName] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Assume login is successful
    setIsLoggedIn(true);
  };

  const handleAddCandidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedPosition && candidateName) {
      setPositions((prev) =>
        prev.map((position) =>
          position.name === selectedPosition
            ? {
                ...position,
                candidates: [...position.candidates, candidateName],
              }
            : position
        )
      );
      setCandidateName("");
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Admin Login
        </h2>
        <form
          className="flex flex-col items-center bg-white p-6 rounded shadow-md"
          onSubmit={handleLogin}
        >
          <input
            type="text"
            placeholder="Admin Email"
            className="mb-4 p-3 border rounded w-64"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="">
      <div className="flex flex-row gap-x-20 items-center justify-center min-h-screen bg-gray-100">
        {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">Candidate Management</h2> */}
        <form
          className="flex flex-col items-center bg-white p-6 rounded shadow-md mb-8"
          onSubmit={handleAddCandidate}
        >
          <select
            className="mb-4 p-3 border rounded w-64"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            required
          >
            <option value="">Select Position</option>
            {positions.map((position) => (
              <option key={position.name} value={position.name}>
                {position.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Candidate Name"
            className="mb-4 p-3 border rounded w-64"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-500"
          >
            Add Candidate
          </button>
        </form>
        <div className="bg-white p-6 rounded shadow-md w-80 m-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Candidates by Position
          </h3>
          {positions.map((position) => (
            <div key={position.name} className="mb-4">
              <h4 className="font-semibold text-gray-700">{position.name}</h4>
              {position.candidates.length === 0 ? (
                <p className="text-gray-500">No candidates added yet.</p>
              ) : (
                <ul className="list-disc pl-4">
                  {position.candidates.map((candidate, index) => (
                    <li key={index} className="text-gray-700">
                      {candidate}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Adjusted Submit Button */}
      <button
        type="submit"
        className="fixed bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 bottom-4 right-4"
      >
        Submit
      </button>
    </main>
  );
};

export default AdminLogin;
