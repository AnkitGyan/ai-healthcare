import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaInfoCircle, FaUserMd, FaStethoscope, FaDumbbell } from 'react-icons/fa'; // Import icons

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center p-8">
      {/* Welcome Section */}
      <section className="text-center mb-12">
        <div className="rounded-full bg-white shadow-lg p-4 inline-block animate-pulse">
          <img
            src="https://litfl.com/wp-content/uploads/2023/11/AI-in-Healthcare-LITFL-680.jpeg" // Replace with your actual logo URL
            alt="Health AI Logo"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-blue-700 mt-4 animate-fade-in">
          Welcome to Health AI
        </h1>
        <br></br><br></br>
        <Link
          to="/dashboard"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out mt-8 animate-bounce"
        >
          Get Started
        </Link>
      </section>
{/* Feature Section */}
        <section className="grid grid-cols-3 gap-6">
          {/* Welcome */}
          <Link to="/welcome" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaHeart className="text-blue-500 text-2xl mb-2" />
            <span className="text-gray-700">Welcome</span>
          </Link>
  {/* Healing */}
          <Link to="/healing" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaInfoCircle className="text-green-500 text-2xl mb-2" />
            <span className="text-gray-700">Healing</span>
          </Link>
  {/* Health */}
          <Link to="/health" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaStethoscope className="text-yellow-500 text-2xl mb-2" />
            <span className="text-gray-700">Health</span>
          </Link>
  {/* Information */}
          <Link to="/information" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaUserMd className="text-red-500 text-2xl mb-2" />
            <span className="text-gray-700">Information</span>
          </Link>
  {/* Heart Rate */}
          <Link to="/heart-rate" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaHeart className="text-purple-500 text-2xl mb-2" />
            <span className="text-gray-700">Heart Rate</span>
          </Link>
  {/* Robotics */}
          <Link to="/robotics" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaDumbbell className="text-indigo-500 text-2xl mb-2" />
            <span className="text-gray-700">Robotics</span>
          </Link>
  {/* Doctors */}
          <Link to="/doctors" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaHeart className="text-pink-500 text-2xl mb-2" />
            <span className="text-gray-700">Doctors</span>
          </Link>
  {/* Wellness */}
          <Link to="/wellness" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaInfoCircle className="text-teal-500 text-2xl mb-2" />
            <span className="text-gray-700">Wellness</span>
          </Link>
  {/* Exercise */}
          <Link to="/exercise" className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
            <FaStethoscope className="text-gray-500 text-2xl mb-2" />
            <span className="text-gray-700">Exercise</span>
          </Link>
        </section>
    </div>
  );
};

export default Home;
