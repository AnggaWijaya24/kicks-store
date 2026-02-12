import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import History from "./pages/History";

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
