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

  /* TIME ALERT */

  let timeColor = "text-gray-400";
  let borderAlert = "";

  if (minutes > 5) {
    timeColor = "text-yellow-600";
  }

  if (minutes > 10) {
    timeColor = "text-red-600";
    borderAlert = "border-red-300 ring-1 ring-red-200";
  }

  /* TABLE STATUS COLOR (PRO DASHBOARD STYLE) */

  let tableStatusColor = "border-gray-200";

  if (order.status === "pending") {
    tableStatusColor = "border-yellow-400";
  }

  if (order.status === "preparing") {
    tableStatusColor = "border-red-400";
  }

  if (order.status === "served") {
    tableStatusColor = "border-green-400";
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
        rounded-lg
        p-5
        border-2
        ${tableStatusColor}
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        ${borderAlert}
        ${isSelected ? "ring-2 ring-blue-500 border-blue-200" : ""}
      `}
    >
      {/* HEADER */}

      <div className="flex items-start justify-between mb-3">
        <div>
          {/* ORDER NUMBER */}

          <p className="text-xs text-gray-400 font-medium">
            Order #{order.orderNumber}
          </p>

          {/* CUSTOMER NAME */}

          {order.customerName && (
            <p className="text-sm font-semibold text-gray-900">
              {order.customerName}
            </p>
          )}

          {/* TABLE + PARTY SIZE */}

          <p className="text-sm text-gray-500">
            Table {order.table}
            {order.partySize && ` • ${order.partySize} people`}
          </p>

          {/* OCCUPIED INDICATOR */}

          {order.status !== "served" && (
            <p className="text-xs text-red-500 font-medium mt-1">● Occupied</p>
          )}
        </div>

        {/* ORDER ID */}

        <span className="text-xs text-gray-300 font-medium">
          #{String(order.id).slice(-4)}
        </span>
      </div>

      {/* STATUS */}

      <StatusBadge status={order.status} />

      {/* ITEMS - KITCHEN STYLE */}

      <div className="mt-4 space-y-1 text-sm">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <span className="flex gap-2 text-gray-800">
              <span className="font-semibold text-gray-900 min-w-[22px]">
                {item.qty}×
              </span>

              <span className="break-words">{item.name}</span>
            </span>

            <span className="text-gray-400 text-xs">
              ${(item.qty * item.price).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* INFO */}

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">
          {itemCount} item{itemCount !== 1 && "s"}
        </span>

        <span className={`font-semibold ${timeColor}`}>{minutes} min</span>
      </div>

      {/* TOTAL */}

      <div className="mt-3 border-t border-gray-100 pt-3 flex items-center justify-between">
        <span className="text-sm text-gray-500">Total</span>

        <span className="text-lg font-semibold text-gray-900">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* ACTIONS */}

      <div className="mt-4 flex gap-2">
        {order.status === "pending" && (
          <button
            onClick={startCooking}
            className="
              flex-1
              text-sm
              bg-yellow-500
              hover:bg-yellow-600
              text-white
              py-2
              rounded-md
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
              flex-1
              text-sm
              bg-green-600
              hover:bg-green-700
              text-white
              py-2
              rounded-md
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
              flex-1
              text-sm
              bg-gray-700
              hover:bg-gray-800
              text-white
              py-2
              rounded-md
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
