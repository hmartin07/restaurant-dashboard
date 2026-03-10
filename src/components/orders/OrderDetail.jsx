import StatusBadge from "../ui/StatusBadge";
import OrderItem from "./OrderItem";
import { FaUtensils } from "react-icons/fa";

function OrderDetail({ order }) {
  if (!order) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 text-gray-400 flex flex-col items-center justify-center gap-4 text-center">
        <FaUtensils className="text-3xl opacity-50" />

        <p className="font-medium">Select a table to see order details</p>

        <span className="text-sm text-gray-400">
          Orders will appear here once a table is selected
        </span>
      </div>
    );
  }

  const total = order.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );

  return (
    <div
      className="
bg-white
rounded-2xl
shadow-lg
p-8
border
border-gray-100
transition-all
"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Table {order.table}
      </h2>

      <StatusBadge status={order.status} />

      <div className="mt-6 space-y-3">
        {order.items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>

      <div className="border-t mt-6 pt-4">
        <p className="text-lg font-bold text-gray-800">
          Total: ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default OrderDetail;
