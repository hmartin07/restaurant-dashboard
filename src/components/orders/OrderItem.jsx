function OrderItem({ item }) {
  const icons = {
    Burger: "🍔",
    Pizza: "🍕",
    Pasta: "🍝",
    Salad: "🥗",
    Sushi: "🍣",
    Water: "💧",
    Fries: "🍟",
    Wine: "🍷",
  };

  return (
    <div className="flex justify-between items-center text-gray-700 py-2 border-b border-gray-100">
      <span className="flex items-center gap-2 font-medium">
        <span>{icons[item.name] || "🍽️"}</span>
        {item.name}
      </span>

      <span className="text-sm text-gray-500">
        x{item.qty} — ${(item.qty * item.price).toFixed(2)}
      </span>
    </div>
  );
}

export default OrderItem;
