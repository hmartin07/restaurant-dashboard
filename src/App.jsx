import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            🍽 Restaurant Dashboard
          </h1>

          <span className="text-sm text-gray-500 hidden sm:block">
            Active Orders
          </span>
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
