import TableCard from "../components/tables/TableCard";
import OrderDetail from "../components/orders/OrderDetail";
import { useOrders } from "../hooks/useOrders";
import DashboardStats from "../components/dashboard/DashboardStats";

function Dashboard() {
  const { orders, selectedOrder, setSelectedOrder } = useOrders();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* HEADER */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Active Tables
          </h2>

          <span className="text-sm text-gray-500">
            {orders.length} active orders
          </span>
        </div>

        <DashboardStats orders={orders} />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* TABLES */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {orders.map((order) => (
              <TableCard
                key={order.id}
                order={order}
                onSelect={setSelectedOrder}
                isSelected={selectedOrder?.id === order.id}
              />
            ))}
          </div>
        </div>

        {/* ORDER DETAIL */}
        <div className="sticky top-24">
          <OrderDetail order={selectedOrder} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
