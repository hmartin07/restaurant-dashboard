import { useState } from "react";
import TableCard from "../components/tables/TableCard";
import { useOrders } from "../hooks/useOrders";
import DashboardStats from "../components/dashboard/DashboardStats";
import OrderDrawer from "../components/orders/OrderDrawer";

function Dashboard() {
  const { orders, selectedOrder, setSelectedOrder, deleteOrder } = useOrders();

  const [filter, setFilter] = useState("all");

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* HEADER */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Active Tables
          </h2>

          <span className="text-sm text-gray-500">
            {orders.length} active orders
          </span>
        </div>

        <DashboardStats
          orders={orders}
          onFilter={setFilter}
          activeFilter={filter}
        />
      </div>

      {/* TABLE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...filteredOrders]
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((order) => (
            <TableCard
              key={order.id}
              order={order}
              onSelect={setSelectedOrder}
              onDelete={deleteOrder}
              isSelected={selectedOrder?.id === order.id}
            />
          ))}
      </div>

      {/* DRAWER */}
      <OrderDrawer
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </div>
  );
}

export default Dashboard;
