import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const { wishlist } = useShop();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-indigo-600 tracking-tighter">
            👟 KICKS STORE
          </Link>

          {/* Menu */}
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>

            <Link to="/wishlist" className="relative text-gray-700 hover:text-blue-600 font-medium">
              Wishlist
              {}
              {wishlist.length > 0 && <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{wishlist.length}</span>}
            </Link>

            <Link to="/history" className="text-gray-700 hover:text-blue-600 font-medium">
              History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
