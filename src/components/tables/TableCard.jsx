import StatusBadge from "../ui/StatusBadge";
import { FaUtensils } from "react-icons/fa";

function TableCard({ order, onSelect, isSelected }) {
  const total = order.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );

  const itemCount = order.items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      onClick={() => onSelect(order)}
      className={`
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        transition
        cursor-pointer
        border
        border-gray-100
        hover:-translate-y-1
        hover:border-gray-200
        active:scale-95
        ${isSelected ? "ring-2 ring-blue-500 border-blue-200" : ""}
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Table {order.table}
        </h3>

        <FaUtensils className="text-gray-400 text-lg" />
      </div>

      <StatusBadge status={order.status} />

      <p className="mt-3 text-sm text-gray-500">{itemCount} items</p>

      <p className="mt-1 text-xl font-bold text-gray-800">
        ${total.toFixed(2)}
      </p>
    </div>
  );
}

export default TableCard;
