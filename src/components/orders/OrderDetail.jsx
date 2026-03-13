import StatusBadge from "../ui/StatusBadge";
import OrderItem from "./OrderItem";
import { FaUtensils, FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";

function OrderDetail({ order }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

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

  const minutes = Math.floor((now - order.createdAt) / 60000);

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
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Table {order.table}</h2>

        <StatusBadge status={order.status} />
      </div>

      {/* ORDER TIME */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <FaClock />
        <span>{minutes} min</span>
      </div>

      {/* ITEMS */}
      <div className="space-y-3">
        {order.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      {/* NOTES */}
      {order.notes && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-6 text-sm text-yellow-800">
          <strong>Note:</strong> {order.notes}
        </div>
      )}

      {/* TOTAL */}
      <div className="border-t mt-6 pt-4 flex justify-between items-center">
        <span className="text-gray-500 text-sm">Order Total</span>

        <span className="text-lg font-bold text-gray-800">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default OrderDetail;
