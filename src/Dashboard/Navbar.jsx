import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-64 right-0 h-16 flex items-center justify-between px-6">
      <div>
        <input type="text" placeholder="Search..." className="p-2 rounded-lg border border-gray-300" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">
          <i className="bell-icon"></i> {/* Placeholder for notification icon */}
        </button>
        <button className="text-gray-600">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

