import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { useEffect, useState } from "react";

import { FaUtensils, FaClock, FaPlus } from "react-icons/fa";

function Layout() {
  const [time, setTime] = useState(new Date());
  const location = useLocation();

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* ================= HEADER ================= */}

      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3 group transition">
            <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gray-200 transition">
              <FaUtensils className="text-gray-700 text-lg" />
            </div>

            <div className="flex flex-col leading-tight">
              <h1 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-black transition">
                Restaurant POS
              </h1>

              <span className="text-xs text-gray-400 hidden sm:block">
                Kitchen monitoring system
              </span>
            </div>
          </Link>

          {/* Right Side */}

          <div className="flex items-center gap-6">
            {/* Kitchen Status */}

            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="hidden sm:block">Kitchen Live</span>
            </div>

            {/* Clock */}

            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-medium">
              <FaClock className="opacity-70" />
              {formattedTime}
            </div>

            {/* New Order */}

            <Link
              to="/menu"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-sm active:scale-95"
            >
              <FaPlus className="text-xs" />
              New Order
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {/* Page Header */}

        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {location.pathname === "/"
                ? "Kitchen Dashboard"
                : "Create New Order"}
            </h2>

            <span className="text-sm text-gray-400">
              {location.pathname === "/"
                ? "Monitor restaurant tables and active orders"
                : "Select menu items and create a new order"}
            </span>
          </div>
        </div>

        {/* Pages */}

        <div className="transition-all duration-200 ease-in-out">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-gray-200 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-gray-400">
          <span>Restaurant POS Dashboard</span>

          <span className="hidden sm:block">Frontend Technical Test</span>
        </div>
      </footer>

      {/* ================= TOAST SYSTEM ================= */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
