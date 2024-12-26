// src/app/student-dashboard/page.tsx
"use client";
import React, { useState } from "react";

// Mock Data (Replace with API calls to fetch actual data)
const positions = [
  {
    name: "Executive President",
    candidates: ["Candidate A", "Candidate B"],
  },
  {
    name: "Vice President",
    candidates: ["Candidate C", "Candidate D"],
  },
  {
    name: "Treasurer",
    candidates: ["Candidate E", "Candidate F"],
  },
  {
    name: "Financial Secretary",
    candidates: ["Candidate G", "Candidate H"],
  },
];

const StudentDashboard: React.FC = () => {
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);
  const [selectedCandidates, setSelectedCandidates] = useState<Record<string, string>>({});

  const handleExpand = (positionName: string) => {
    setExpandedPosition(expandedPosition === positionName ? null : positionName);
  };

  const handleCandidateSelect = (positionName: string, candidate: string) => {
    setSelectedCandidates((prev) => ({ ...prev, [positionName]: candidate }));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Candidates and Positions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-10">
        {positions.map((position) => (
          <div
            key={position.name}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => handleExpand(position.name)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {position.name}
            </h3>
            {expandedPosition === position.name && (
              <div className="mt-4">
                {position.candidates.length === 0 ? (
                  <p className="text-gray-500">No candidates available.</p>
                ) : (
                  <ul className="space-y-2">
                    {position.candidates.map((candidate) => (
                      <li
                        key={candidate}
                        className={`p-2 border rounded cursor-pointer ${
                          selectedCandidates[position.name] === candidate
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                        }`}
                        onClick={() => handleCandidateSelect(position.name, candidate)}
                      >
                        {candidate}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          onClick={() => alert(JSON.stringify(selectedCandidates, null, 2))}
        >
          Submit Choices
        </button>
      </div>
    </main>
  );
};

export default StudentDashboard;
