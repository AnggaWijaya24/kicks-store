import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const { wishlist } = useShop();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {" "}
          {}
          {/* Logo Kicksology */}
          <Link to="/" className="text-2xl font-black text-gray-900 tracking-widest uppercase hover:text-orange-500 transition-colors duration-300">
            👟KICKSOLOGY
          </Link>
          {/* Menu */}
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-wider transition-colors duration-200">
              Home
            </Link>

            <Link to="/wishlist" className="relative text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-wider transition-colors duration-200">
              Wishlist
              {/* Notifikasi Wishlist*/}
              {wishlist.length > 0 && <span className="absolute -top-3 -right-4 bg-orange-500 text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">{wishlist.length}</span>}
            </Link>

            <Link to="/history" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-wider transition-colors duration-200">
              History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
