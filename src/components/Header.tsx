import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold text-blue-700">
                {/* <img src="/logo.png" alt="Logo" className="h-6" /> */}
                CarpenterBook
            </div>
            <nav className="flex space-x-6 text-sm text-gray-700 font-medium">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/booking" className="hover:text-blue-600">Book Now</Link>
                <Link to="/my-bookings" className="hover:text-blue-600">My Bookings</Link>
            </nav>
        </header>
    );
};

export default Header;
