function OrderItem({ item }) {
  return (
    <div className="flex justify-between items-center text-gray-700">
      <span className="font-medium">{item.name}</span>

      <span className="text-sm text-gray-500">
        x{item.qty} — ${(item.qty * item.price).toFixed(2)}
      </span>
    </div>
  );
}

export default OrderItem;
