import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUpSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password === confirmPassword) {
      onSignUpSuccess(username); // If password matches, trigger signup success
      navigate('/'); // Redirect to home page after successful signup
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen"
      style={{ backgroundImage: 'url(/coffee.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div
        className="bg-white p-10 rounded-lg shadow-lg"
        style={{
          width: '400px', // Increase the width
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // White background with 70% opacity
        }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        {/* Username Field */}
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update the username state
        />

        {/* Password Field */}
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update the password state
        />

        {/* Confirm Password Field */}
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Update the confirm password state
        />

        {/* Phone Number Field (Number Box) */}
        <input
          type="number"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} // Update the phone number state
        />

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>

        {/* Back to Login Link */}
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <button
            onClick={() => navigate('/login')} // Navigate back to login page
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
