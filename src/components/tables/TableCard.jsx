import StatusBadge from "../ui/StatusBadge";
import { FaUtensils } from "react-icons/fa";

function TableCard({ order, onSelect }) {
  const total = order.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );

  return (
    <div
      onClick={() => onSelect(order)}
      className="
bg-white
rounded-2xl
p-6
shadow-md
hover:shadow-xl
transition
cursor-pointer
border
border-gray-100
hover:-translate-y-1
"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Table {order.table}
        </h3>

        <FaUtensils className="text-gray-400" />
      </div>

      <StatusBadge status={order.status} />

      <p className="mt-4 text-xl font-bold text-gray-700">${total}</p>
    </div>
  );
}

export default TableCard;
