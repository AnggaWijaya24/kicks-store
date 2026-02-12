import React from "react";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useShop();

  // 1. Logic untuk Empty State (Sesuai Requirements UI/UX)
  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="text-6xl mb-4">💔</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Wishlist Masih Kosong</h2>
        <p className="text-gray-500 mb-6">Kamu belum menyimpan barang apapun.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Cari Barang Dulu
        </Link>
      </div>
    );
  }

  // 2. Tampilan Grid jika ada isinya
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-8">Ada {wishlist.length} barang yang kamu impikan.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
