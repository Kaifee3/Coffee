import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ username, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false); // State to toggle dropdown visibility
  const navigate = useNavigate();

  const handleUsernameClick = () => {
    setShowMenu(!showMenu); // Toggle the dropdown menu visibility
  };

  return (
    <div className="fixed top-4 right-4 z-10">
      <div className="relative">
        {/* Username, clickable */}
        <p
          className="text-lg font-semibold cursor-pointer hover:text-blue-500"
          onClick={handleUsernameClick} // Toggle dropdown visibility on click
        >
          {username}
        </p>

        {/* Dropdown menu */}
        {showMenu && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-300 z-20">
            {/* Order Details button */}
            <button
              onClick={() => {
                setShowMenu(false); // Close menu
                navigate('/order-details'); // Navigate to Order Details page
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
            >
              Order Details
            </button>

            {/* Log Out button */}
            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 rounded-md"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
