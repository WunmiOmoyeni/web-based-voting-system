// src/app/page.tsx
"use client";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const HomePage: React.FC = () => {
  return (
    <>
     {/* <Navbar /> */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* <Header/> */}
       
        <h1 className="text-4xl font-bold text-blue-600 mb-10">AU DECIDES</h1>
        <Login/> 
      </main>
    </>
  );
};

export default HomePage;
