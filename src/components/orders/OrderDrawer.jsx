import { useEffect } from "react";
import OrderDetail from "./OrderDetail";

function OrderDrawer({ order, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* OVERLAY */}
      <div onClick={onClose} className="absolute inset-0 bg-black/30" />

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
        <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Order #{order.id}
            </h2>

            <p className="text-sm text-gray-500">Table {order.table}</p>
          </div>

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
