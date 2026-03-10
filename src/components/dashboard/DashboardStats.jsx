function DashboardStats({ orders }) {
  const totalTables = orders.length;

  const pending = orders.filter((o) => o.status === "pending").length;
  const preparing = orders.filter((o) => o.status === "preparing").length;
  const served = orders.filter((o) => o.status === "served").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-xl p-4 shadow-sm border">
        <p className="text-sm text-gray-500">Active Tables</p>
        <p className="text-2xl font-bold text-gray-800">{totalTables}</p>
      </div>

      <div className="bg-yellow-50 rounded-xl p-4 border">
        <p className="text-sm text-yellow-700">Pending</p>
        <p className="text-2xl font-bold text-yellow-700">{pending}</p>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 border">
        <p className="text-sm text-blue-700">Preparing</p>
        <p className="text-2xl font-bold text-blue-700">{preparing}</p>
      </div>

      <div className="bg-green-50 rounded-xl p-4 border">
        <p className="text-sm text-green-700">Served</p>
        <p className="text-2xl font-bold text-green-700">{served}</p>
      </div>
    </div>
  );
}

export default DashboardStats;
