import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to programmatically navigate

const Login = ({ onLoginSuccess, onGuestLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate to the SignUp page

  const handleLogin = () => {
    // Check if the entered credentials match the dummy credentials
    if (username === 'kaifi' && password === 'Kaifi') {
      onLoginSuccess(username); // If credentials are correct, trigger login success
    } else {
      alert('Incorrect username or password.'); // If incorrect, show alert
    }
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen"
      style={{ backgroundImage: 'url(/coffee.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Skip Button at top-right */}
      <button
        onClick={onGuestLogin} // Trigger guest login
        className="absolute top-4 right-4 text-md text-white bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600"
      >
        Skip
      </button>

      {/* Login Box with Transparent Background */}
      <div
        className="p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 80% opacity
        }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        {/* Username Field */}
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update the username state
        />

        {/* Password Field */}
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update the password state
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            onClick={() => navigate('/signup')} // Navigate to the signup page
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
