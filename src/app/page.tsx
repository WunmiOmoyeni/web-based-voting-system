// src/app/page.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from './images/au-logo.jpg'
import student from './images/ph--student.svg'
import admin from './images/subway--admin.svg'

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleRoleSelect = (role: string) => {
    router.push(`/${role.toLowerCase()}-login`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-8 lg:px-16">
      <Image src={logo} alt='au-logo' width={70} className='mb-10' />
      <h1 className="text-4xl font-bold text-blue-600 mb-8">AU DECIDES</h1>
      
      {/* Image Section */}
      <div className="flex flex-col items-center mb-8">
        
        <p className="text-xl text-gray-600">Select your role to get started</p>
      </div>

      {/* Role Selection Section */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-8 sm:gap-16 mb-12 w-full max-w-3xl">
        <div
          onClick={() => handleRoleSelect('Student')}
          className="flex flex-col items-center cursor-pointer w-full sm:w-1/2"
        >
          <Image
            src={student}
            alt="Student"
            className="w-24 h-24 mb-4 mx-auto"
          />
          <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 w-full text-center">
            Student
          </button>
        </div>

        <div
          onClick={() => handleRoleSelect('Admin')}
          className="flex flex-col items-center cursor-pointer w-full sm:w-1/2"
        >
          <Image
            src={admin}
            alt="Admin"
            className="w-24 h-24 mb-4 mx-auto"
          />
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 w-full text-center">
            Admin
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
