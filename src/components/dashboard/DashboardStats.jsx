function DashboardStats({ orders, onFilter, activeFilter }) {
  const totalTables = orders.length;

  const pending = orders.filter((o) => o.status === "pending").length;
  const preparing = orders.filter((o) => o.status === "preparing").length;
  const served = orders.filter((o) => o.status === "served").length;

  const base = "rounded-xl p-4 md:p-5 border transition cursor-pointer";

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {/* TOTAL ORDERS */}

      <div
        onClick={() => onFilter("all")}
        className={`${base} ${
          activeFilter === "all"
            ? "bg-gray-100 border-gray-400 shadow-md"
            : "bg-white border-gray-200 hover:shadow-md"
        }`}
      >
        <p className="text-xs md:text-sm text-gray-500">Total Orders</p>

        <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
          {totalTables}
        </p>
      </div>

      {/* PENDING */}

      <div
        onClick={() => onFilter("pending")}
        className={`${base} ${
          activeFilter === "pending"
            ? "bg-yellow-200 border-yellow-400 shadow-md"
            : "bg-yellow-50 border-yellow-100 hover:shadow-md"
        }`}
      >
        <p className="text-xs md:text-sm text-yellow-700">Pending</p>

        <p className="text-2xl md:text-3xl font-bold text-yellow-700 mt-1">
          {pending}
        </p>
      </div>

      {/* PREPARING */}

      <div
        onClick={() => onFilter("preparing")}
        className={`${base} ${
          activeFilter === "preparing"
            ? "bg-blue-200 border-blue-400 shadow-md"
            : "bg-blue-50 border-blue-100 hover:shadow-md"
        }`}
      >
        <p className="text-xs md:text-sm text-blue-700">Preparing</p>

        <p className="text-2xl md:text-3xl font-bold text-blue-700 mt-1">
          {preparing}
        </p>
      </div>

      {/* SERVED */}

      <div
        onClick={() => onFilter("served")}
        className={`${base} ${
          activeFilter === "served"
            ? "bg-green-200 border-green-400 shadow-md"
            : "bg-green-50 border-green-100 hover:shadow-md"
        }`}
      >
        <p className="text-xs md:text-sm text-green-700">Served</p>

        <p className="text-2xl md:text-3xl font-bold text-green-700 mt-1">
          {served}
        </p>
      </div>
    </div>
  );
}

export default DashboardStats;
