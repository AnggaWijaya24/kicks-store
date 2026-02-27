import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* 1. HERO SECTION*/}
      <div className="bg-gray-900 text-white py-24 px-4 text-center relative overflow-hidden">
        {/* Dekorasi background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            Step Into <span className="text-orange-500">Greatness</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">Temukan koleksi sneakers premium dan limited edition. Gaya maksimal, kualitas tanpa kompromi.</p>
          <a href="#katalog" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 inline-block uppercase tracking-wider shadow-lg shadow-orange-500/30">
            Lihat Koleksi
          </a>
        </div>
      </div>

      {/* 2. TRUST BADGES */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white p-6 rounded-2xl shadow-md -mt-12 relative z-20">
          <div className="p-4">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 uppercase">Gratis Ongkir</h3>
            <p className="text-sm text-gray-500 mt-1">Ke seluruh wilayah Indonesia</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-bold text-gray-900 uppercase">100% Original</h3>
            <p className="text-sm text-gray-500 mt-1">Jaminan uang kembali</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-bold text-gray-900 uppercase">Garansi Tukar</h3>
            <p className="text-sm text-gray-500 mt-1">Bebas tukar jika ukuran tidak pas</p>
          </div>
        </div>
      </div>

      {/* 3. KATALOG PRODUK */}
      <div id="katalog" className="max-w-6xl mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-2 border-gray-200 pb-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 uppercase">
              Koleksi <span className="text-orange-500">Terbaru</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium">Sneakers pilihan terbaik minggu ini yang wajib kamu miliki.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
