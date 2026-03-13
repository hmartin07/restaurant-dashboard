import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { FaUtensils, FaClock } from "react-icons/fa";

function App() {
  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <FaUtensils className="text-gray-700 text-lg" />
              </div>

              <div className="flex flex-col leading-tight">
                <h1 className="text-lg md:text-xl font-semibold text-gray-800">
                  Restaurant POS
                </h1>

                <span className="text-xs text-gray-400 hidden sm:block">
                  Kitchen monitoring system
                </span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              {/* Kitchen Status */}
              <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="hidden sm:block">Kitchen Live</span>
              </div>

              {/* Clock */}
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                <FaClock className="opacity-70" />
                {now}
              </div>

              {/* New Order Button */}
              <Link
                to="/menu"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
              >
                New Order
              </Link>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
