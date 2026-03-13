import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuGrid from "../components/menu/MenuGrid";
import TableSelector from "../components/menu/TableSelector";
import CartSummary from "../components/cart/CartSummary";

import { useOrders } from "../hooks/useOrders";

function Menu() {
  const [cart, setCart] = useState([]);
  const [notes, setNotes] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  const navigate = useNavigate();
  const { createOrder, orders } = useOrders();

  const tables = [1, 2, 3, 4, 5, 6];

  const addItem = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(
        cart.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)),
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };
  const removeItem = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (!existing) return;

    if (existing.qty === 1) {
      setCart(cart.filter((i) => i.id !== item.id));
    } else {
      setCart(
        cart.map((i) => (i.id === item.id ? { ...i, qty: i.qty - 1 } : i)),
      );
    }
  };

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  const handleCreateOrder = () => {
    if (!selectedTable) {
      alert("Please select a table first.");
      return;
    }

    if (cart.length === 0) return;

    createOrder({
      table: selectedTable,
      items: cart,
      notes,
    });

    setCart([]);
    setNotes("");
    setSelectedTable(null);

    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 pb-40">
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-2xl font-semibold mb-6">Restaurant Menu</h1>

      <TableSelector
        tables={tables}
        selectedTable={selectedTable}
        onSelect={setSelectedTable}
        orders={orders}
      />

      <MenuGrid onAdd={addItem} onRemove={removeItem} cart={cart} />

      <CartSummary
        cart={cart}
        total={total}
        notes={notes}
        setNotes={setNotes}
        selectedTable={selectedTable}
        onCreateOrder={handleCreateOrder}
        setCart={setCart}
      />
    </div>
  );
}

export default Menu;
