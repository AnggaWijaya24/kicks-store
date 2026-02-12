import React, { createContext, useState, useContext } from "react";

// 1. Membuat Context
const ShopContext = createContext();

// 2. Membuat Provider (Penyedia Data)
export const ShopProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Fungsi: Tambah/Hapus Wishlist
  const toggleWishlist = (product) => {
    const isExist = wishlist.find((item) => item.id === product.id);
    if (isExist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id)); // Hapus
    } else {
      setWishlist([...wishlist, product]); // Tambah
    }
  };

  // Fungsi: Beli Produk (Pindah ke History)
  const buyProduct = (product) => {
    const newTransaction = {
      ...product,
      date: new Date().toLocaleDateString(),
      orderId: Date.now(),
    };
    setTransactions([...transactions, newTransaction]);

    // Hapus dari wishlist kalau barangnya dibeli
    setWishlist(wishlist.filter((item) => item.id !== product.id));

    alert(`Berhasil membeli ${product.name}!`);
  };

  return <ShopContext.Provider value={{ wishlist, transactions, toggleWishlist, buyProduct }}>{children}</ShopContext.Provider>;
};

// 3. Custom Hook biar gampang dipanggil
export const useShop = () => useContext(ShopContext);
