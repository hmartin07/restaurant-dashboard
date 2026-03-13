import StatusBadge from "../ui/StatusBadge";
import { useState, useEffect } from "react";
import { useOrders } from "../../hooks/useOrders";

function TableCard({ order, onSelect, isSelected, onDelete }) {
  const { updateOrderStatus } = useOrders();

  const total = order.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );

  const itemCount = order.items.reduce((sum, item) => sum + item.qty, 0);

  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor((now - order.createdAt) / 60000);

  /* TIME ALERT SYSTEM */

  let timeColor = "text-green-500";
  let borderAlert = "";

  if (minutes > 5) {
    timeColor = "text-yellow-500";
  }

  if (minutes > 10) {
    timeColor = "text-red-600";
    borderAlert = "border-red-400 ring-1 ring-red-300";
  }

  /* ACTIONS */

  const startCooking = (e) => {
    e.stopPropagation();
    updateOrderStatus(order.id, "preparing");
  };

  const markReady = (e) => {
    e.stopPropagation();
    updateOrderStatus(order.id, "served");
  };

  const clearTable = (e) => {
    e.stopPropagation();
    onDelete(order.id);
  };

  return (
    <div
      onClick={() => onSelect(order)}
      className={`
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all duration-200 ease-out
        cursor-pointer
        border
        border-gray-200
        hover:-translate-y-1
        hover:scale-[1.02]
        active:scale-95
        ${borderAlert}
        ${isSelected ? "ring-2 ring-blue-500 border-blue-200" : ""}
      `}
    >
      {/* HEADER */}

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Table {order.table}
        </h3>

        <span className="text-xs text-gray-400 font-medium">
          Order #{order.id}
        </span>
      </div>

      {/* STATUS */}

      <StatusBadge status={order.status} />

      {/* ORDER INFO */}

      <div className="mt-4 space-y-1">
        <p className="text-sm text-gray-500">
          {itemCount} item{itemCount !== 1 && "s"}
        </p>

        <p className={`text-xs font-semibold ${timeColor}`}>
          {minutes} min elapsed
        </p>
      </div>

      {/* TOTAL */}

      <p className="mt-3 text-2xl font-bold text-gray-800">
        ${total.toFixed(2)}
      </p>

      {/* ACTION BUTTONS */}

      <div className="mt-4 flex gap-2">
        {order.status === "pending" && (
          <button
            onClick={startCooking}
            className="
              text-xs
              bg-yellow-500
              hover:bg-yellow-600
              text-white
              px-3 py-1
              rounded-lg
              transition
            "
          >
            Start
          </button>
        )}

        {order.status === "preparing" && (
          <button
            onClick={markReady}
            className="
              text-xs
              bg-green-600
              hover:bg-green-700
              text-white
              px-3 py-1
              rounded-lg
              transition
            "
          >
            Ready
          </button>
        )}

        {order.status === "served" && (
          <button
            onClick={clearTable}
            className="
              text-xs
              bg-gray-600
              hover:bg-gray-700
              text-white
              px-3 py-1
              rounded-lg
              transition
            "
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default TableCard;
