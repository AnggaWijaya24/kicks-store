import React from "react";
import { useShop } from "../context/ShopContext";
import { Link } from "react-router-dom";

const History = () => {
  const { transactions } = useShop();

  // 1. Empty State untuk History
  if (transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="text-6xl mb-4">🧾</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Belum Ada Transaksi</h2>
        <p className="text-gray-500 mb-6">Riwayat belanjamu akan muncul di sini.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Belanja Sekarang
        </Link>
      </div>
    );
  }

  // 2. Tampilan List Transaksi
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Riwayat Transaksi</h1>

      <div className="space-y-4">
        {transactions.map((item, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Info Produk */}
            <div className="flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-gray-100" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Order ID: <span className="font-mono text-gray-700">#{item.orderId}</span>
                </p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>

            {/* Harga & Status */}
            <div className="text-right w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-end">
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold mb-1">Berhasil</span>
              <p className="text-blue-600 font-bold text-lg">Rp {item.price.toLocaleString("id-ID")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
