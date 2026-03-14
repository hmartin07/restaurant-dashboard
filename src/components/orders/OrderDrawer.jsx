import { useEffect, useState } from "react";
import OrderDetail from "./OrderDetail";

function OrderDrawer({ order, onClose }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    const timer = setInterval(() => {
      setNow(Date.now());
    }, 60000);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      clearInterval(timer);
    };
  }, [onClose]);

  if (!order) return null;

  const minutes = Math.floor((now - order.createdAt) / 60000);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      {/* DRAWER */}
      <div
        className="
          ml-auto
          w-[420px]
          h-full
          bg-white
          shadow-xl
          flex
          flex-col
          relative
        "
      >
        {/* HEADER */}
        <div className="border-b border-gray-100 px-6 py-5 flex items-start justify-between">
          <div>
            {/* ORDER NUMBER */}
            <h2 className="text-lg font-semibold text-gray-900">
              Order #{order.orderNumber || order.id}
            </h2>

            {/* CUSTOMER */}
            {order.customerName && (
              <p className="text-sm font-medium text-gray-800">
                {order.customerName}
              </p>
            )}

            {/* TABLE + PARTY SIZE */}
            <p className="text-sm text-gray-500">
              Table {order.table}
              {order.partySize && ` • ${order.partySize} people`}
            </p>

            {/* STATUS */}
            <p className="text-xs text-gray-400 mt-1 capitalize">
              Status: {order.status}
            </p>

            {/* TIME */}
            <p className="text-xs text-gray-400">
              ⏱ {minutes} min since created
            </p>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              text-gray-400
              hover:text-gray-700
              text-lg
              transition
            "
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          <OrderDetail order={order} />
        </div>
      </div>
    </div>
  );
}

export default OrderDrawer;
