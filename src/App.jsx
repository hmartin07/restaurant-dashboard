import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍽️</span>
            <h1 className="text-xl font-bold text-gray-800">
              Restaurant Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Kitchen Live
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="hidden md:block">Kitchen Monitor</span>
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
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
