import { FaUtensils, FaClock, FaFire, FaCheckCircle } from "react-icons/fa";

function DashboardStats({ orders }) {
  const totalTables = orders.length;

  const pending = orders.filter((o) => o.status === "pending").length;
  const preparing = orders.filter((o) => o.status === "preparing").length;
  const served = orders.filter((o) => o.status === "served").length;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {/* Total Orders */}
      <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-200 hover:shadow-lg transition flex items-center justify-between">
        <div>
          <p className="text-xs md:text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
            {totalTables}
          </p>
        </div>

        <FaUtensils className="text-gray-300 text-2xl" />
      </div>

      {/* Pending */}
      <div className="bg-yellow-50 rounded-xl p-4 md:p-5 border border-yellow-100 hover:shadow-md transition flex items-center justify-between">
        <div>
          <p className="text-xs md:text-sm text-yellow-700">Pending</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-700 mt-1">
            {pending}
          </p>
        </div>

        <FaClock className="text-yellow-400 text-2xl" />
      </div>

      {/* Preparing */}
      <div className="bg-blue-50 rounded-xl p-4 md:p-5 border border-blue-100 hover:shadow-md transition flex items-center justify-between">
        <div>
          <p className="text-xs md:text-sm text-blue-700">Preparing</p>
          <p className="text-2xl md:text-3xl font-bold text-blue-700 mt-1">
            {preparing}
          </p>
        </div>

        <FaFire className="text-blue-400 text-2xl" />
      </div>

      {/* Served */}
      <div className="bg-green-50 rounded-xl p-4 md:p-5 border border-green-100 hover:shadow-md transition flex items-center justify-between">
        <div>
          <p className="text-xs md:text-sm text-green-700">Served</p>
          <p className="text-2xl md:text-3xl font-bold text-green-700 mt-1">
            {served}
          </p>
        </div>

        <FaCheckCircle className="text-green-400 text-2xl" />
      </div>
    </div>
  );
}

export default DashboardStats;
