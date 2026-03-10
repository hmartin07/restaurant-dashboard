import Dashboard from "./pages/Dashboard";
import { FaUtensils, FaClock } from "react-icons/fa";

function App() {
  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
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
                Restaurant Dashboard
              </h1>
              <span className="text-xs text-gray-400 hidden sm:block">
                Kitchen monitoring system
              </span>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="flex items-center gap-6">
            {/* Kitchen Status */}
            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="hidden sm:block">Kitchen Live</span>
            </div>

            {/* Active Orders Counter */}
            <span className="hidden md:block text-sm text-gray-500">
              Active orders running
            </span>

            {/* Clock */}
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <FaClock className="opacity-70" />
              {now}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-6">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
