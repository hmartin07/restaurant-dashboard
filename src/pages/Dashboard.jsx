import TableCard from "../components/tables/TableCard";
import { useOrders } from "../hooks/useOrders";
import OrderDrawer from "../components/orders/OrderDrawer";

function Dashboard({ activeFilter }) {
  const { orders, selectedOrder, setSelectedOrder, deleteOrder } = useOrders();

  const columns = [
    {
      key: "pending",
      title: "Pending",
      color: "bg-amber-100 text-amber-700",
      badge: "bg-amber-500",
      orders: orders
        .filter((o) => o.status === "pending")
        .sort((a, b) => a.createdAt - b.createdAt),
    },
    {
      key: "preparing",
      title: "Preparing",
      color: "bg-blue-100 text-blue-700",
      badge: "bg-blue-500",
      orders: orders
        .filter((o) => o.status === "preparing")
        .sort((a, b) => a.createdAt - b.createdAt),
    },
    {
      key: "served",
      title: "Served",
      color: "bg-emerald-100 text-emerald-700",
      badge: "bg-emerald-500",
      orders: orders
        .filter((o) => o.status === "served")
        .sort((a, b) => a.createdAt - b.createdAt),
    },
  ];

  const visibleColumns = activeFilter
    ? columns.filter((c) => c.key === activeFilter)
    : columns;

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 bg-gray-50 min-h-screen">
      {/* HEADER INFO */}

      <div className="mb-6 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {orders.length === 1
            ? "1 active order"
            : `${orders.length} active orders`}
        </span>
      </div>

      {/* BOARD */}

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-2">
        {visibleColumns.map((column) => (
          <div
            key={column.key}
            className="min-w-[280px] md:min-w-0 bg-white rounded-xl shadow-sm border border-gray-200 p-4"
          >
            {/* COLUMN HEADER */}

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${column.badge}`}></span>

                <h3
                  className={`text-md font-semibold ${column.color} px-2 py-0.5 rounded`}
                >
                  {column.title}
                </h3>
              </div>

              <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">
                {column.orders.length}
              </span>
            </div>

            {/* ORDERS */}

            <div className="space-y-3">
              {column.orders.length === 0 && (
                <div className="text-sm text-gray-400 text-center py-8">
                  No orders in this stage
                </div>
              )}

              {column.orders.map((order) => (
                <TableCard
                  key={order.id}
                  order={order}
                  onSelect={setSelectedOrder}
                  onDelete={deleteOrder}
                  isSelected={selectedOrder?.id === order.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ORDER DETAILS DRAWER */}

      <OrderDrawer
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </div>
  );
}

export default Dashboard;
