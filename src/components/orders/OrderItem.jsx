function OrderItem({ item }) {
  return (
    <div className="flex justify-between text-gray-700">
      <span>{item.name}</span>

      <span className="font-medium">
        x{item.qty} — ${item.qty * item.price}
      </span>
    </div>
  );
}

export default OrderItem;
