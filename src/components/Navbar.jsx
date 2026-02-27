import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const { wishlist } = useShop();
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup menu mobile

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {" "}
          {/* Tinggi adaptif */}
          {/* Logo Kicksology */}
          <Link to="/" className="text-xl md:text-2xl font-black text-gray-900 tracking-widest uppercase hover:text-orange-500 transition-colors duration-300">
            🔥 KICKSOLOGY
          </Link>
          {/* 1. Desktop Menu (Sembunyi di HP, muncul di md:) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-wider transition-colors duration-200">
              Home
            </Link>
            <Link to="/wishlist" className="relative text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-wider transition-colors duration-200">
              Wishlist
              {wishlist.length > 0 && <span className="absolute -top-3 -right-4 bg-orange-500 text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">{wishlist.length}</span>}
            </Link>
            <Link to="/history" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-wider transition-colors duration-200">
              History
            </Link>
          </div>
          {/* 2. Tombol Mobile Menu (Hanya muncul di HP) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none p-2 rounded-md hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  // Ikon Silang (Close)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l18 18" />
                ) : (
                  // Ikon Hamburger (Garis 3)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Dropdown Menu Mobile (Hanya muncul jika isOpen true dan di HP) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t border-gray-100 shadow-inner pb-4`}>
        <div className="px-4 pt-2 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md uppercase tracking-wider">
            Home
          </Link>
          <Link to="/wishlist" onClick={() => setIsOpen(false)} className="flex items-center justify-between px-3 py-2 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md uppercase tracking-wider">
            Wishlist
            {wishlist.length > 0 && <span className="bg-orange-500 text-white text-[11px] font-black rounded-full h-6 w-6 flex items-center justify-center">{wishlist.length}</span>}
          </Link>
          <Link to="/history" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md uppercase tracking-wider">
            History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
