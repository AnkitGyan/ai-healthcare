import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">Healthcare AI</Link>
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/register" className="hover:text-gray-200">Register</Link>
        <Link to="/emergency" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Emergency</Link>
      </div>
    </nav>
  );
};

export default Navbar;
