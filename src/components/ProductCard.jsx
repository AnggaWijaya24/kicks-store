import React from "react";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist, buyProduct } = useShop();
  const isWishlisted = wishlist.find((item) => item.id === product.id);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
      {/* Gambar Sepatu dengan Animasi Zoom */}
      <div className="relative overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
        {/* Label Hype */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">Hype</span>
        </div>
      </div>

      {/* Detail Sepatu */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-black text-lg text-gray-900 uppercase truncate" title={product.name}>
          {product.name}
        </h3>
        <p className="text-orange-500 font-bold text-xl mt-1">Rp {product.price.toLocaleString("id-ID")}</p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-grow">{product.description}</p>

        {/* Tombol Aksi */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => toggleWishlist(product)}
            className={`flex-none w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 border-2 ${
              isWishlisted ? "bg-red-50 text-red-500 border-red-200 hover:bg-red-100" : "bg-white text-gray-400 border-gray-200 hover:border-gray-900 hover:text-gray-900"
            }`}
            title={isWishlisted ? "Hapus dari Wishlist" : "Tambah ke Wishlist"}
          >
            <span className="text-xl">{isWishlisted ? "❤️" : "🤍"}</span>
          </button>

          <button
            onClick={() => buyProduct(product)}
            className="flex-1 bg-gray-900 text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
