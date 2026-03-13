import OrderNotes from "./OrderNotes";

function CartSummary({
  cart,
  total,
  notes,
  setNotes,
  selectedTable,
  onCreateOrder,
  setCart,
}) {
  if (cart.length === 0) return null;

  const removeItem = (id) => {
    const updatedCart = cart
      .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);

    setCart(updatedCart);
  };

  return (
    <div className="sticky bottom-0 bg-white shadow-xl border-t mt-10">
      <div className="p-6 space-y-4">
        {/* TABLE */}
        {selectedTable && (
          <p className="text-sm text-gray-500">
            Table: <span className="font-semibold">{selectedTable}</span>
          </p>
        )}

        {/* CART ITEMS */}
        <div className="space-y-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-sm"
            >
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-500 ml-2">x{item.qty}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-700">
                  ${(item.price * item.qty).toFixed(2)}
                </span>

                <button
                  onClick={() => removeItem(item.id)}
                  className="
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    w-6
                    h-6
                    rounded
                    text-xs
                  "
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* NOTES */}
        <OrderNotes notes={notes} setNotes={setNotes} />

        {/* TOTAL */}
        <div className="flex justify-between items-center pt-2 border-t">
          <span className="font-medium">Total</span>

          <span className="font-bold text-lg">${total.toFixed(2)}</span>

          <button
            onClick={onCreateOrder}
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              px-6
              py-2
              rounded-lg
              transition
            "
          >
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
