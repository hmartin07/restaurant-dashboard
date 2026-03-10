import TableCard from "../components/tables/TableCard";
import OrderDetail from "../components/orders/OrderDetail";
import { useOrders } from "../hooks/useOrders";

function Dashboard() {
  const { orders, selectedOrder, setSelectedOrder } = useOrders();

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        Active Tables
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE - TABLES */}

        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {orders.map((order) => (
              <TableCard
                key={order.id}
                order={order}
                onSelect={setSelectedOrder}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - ORDER DETAIL */}

        <div>
          <OrderDetail order={selectedOrder} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
