import React from "react";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist, buyProduct } = useShop();

  // Cek apakah produk ini ada di wishlist
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
      {/* Gambar Produk */}
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col flex-grow">
        {/* Nama & Harga */}
        <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
        <p className="text-blue-600 font-bold mb-2">Rp {product.price.toLocaleString("id-ID")}</p>

        {/* Deskripsi */}
        <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-2">{product.description}</p>

        {/* Tombol Action */}
        <div className="flex gap-2 mt-auto">
          {/* Tombol Wishlist */}
          <button
            onClick={() => toggleWishlist(product)}
            className={`flex-1 py-2 rounded text-sm font-medium border transition-colors ${isWishlisted ? "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200" : "bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100"}`}
          >
            {isWishlisted ? "Hapus Wishlist" : "❤ Wishlist"}
          </button>

          {/* Tombol Order */}
          <button onClick={() => buyProduct(product)} className="flex-1 py-2 rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
