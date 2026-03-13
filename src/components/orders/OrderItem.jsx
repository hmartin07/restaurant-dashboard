function OrderItem({ item }) {
  const subtotal = item.qty * item.price;

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-xl object-cover border border-gray-200"
        />

        <div className="flex flex-col leading-tight">
          <span className="font-medium text-gray-800">{item.name}</span>

          <span className="text-xs text-gray-400">
            ${item.price.toFixed(2)} each
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-right">
        <span className="block text-sm text-gray-500">x{item.qty}</span>

        <span className="font-semibold text-gray-800">
          ${subtotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default OrderItem;
