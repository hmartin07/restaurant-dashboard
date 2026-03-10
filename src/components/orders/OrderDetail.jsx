import StatusBadge from "../ui/StatusBadge";
import OrderItem from "./OrderItem";

function OrderDetail({ order }) {
  if (!order) {
    return (
      <div
        className="
bg-white
rounded-2xl
shadow-md
p-8
text-gray-400
text-center
"
      >
        Select a table to see order details
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
shadow-md
p-8
border
border-gray-100
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
        <p className="text-lg font-semibold">Total: ${total}</p>
      </div>
    </div>
  );
}

export default OrderDetail;
