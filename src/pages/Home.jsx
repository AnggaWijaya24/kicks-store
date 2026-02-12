import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Koleksi Terbaru 🔥</h1>
        <p className="text-gray-600 mt-2">Dapatkan sneakers impianmu dengan harga terbaik.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
