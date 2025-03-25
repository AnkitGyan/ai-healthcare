import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verify OTP (replace with your actual verification logic)
    if (otp === '123456') {
      alert('OTP Verified!');
      navigate('/dashboard');
    } else {
      alert('Invalid OTP. Please try again.');
      setOtp('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">OTP Verification</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Verify OTP
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Didn't receive the OTP? <a href="#" className="text-blue-500 hover:text-blue-700">Resend OTP</a>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
