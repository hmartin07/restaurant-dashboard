import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import MenuGrid from "../components/menu/MenuGrid";
import TableSelector from "../components/menu/TableSelector";

import CartSummary from "../components/cart/CartSummary";
import CartButton from "../components/cart/CartButton";
import CartDrawer from "../components/cart/CartDrawer";

import { useOrders } from "../hooks/useOrders";

function Menu() {
  const [cart, setCart] = useState([]);
  const [notes, setNotes] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  const [customerName, setCustomerName] = useState("");
  const [partySize, setPartySize] = useState(1);

  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();
  const { createOrder, orders } = useOrders();

  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
      toast.warning("Please select a table first");
      return;
    }

    if (!customerName.trim()) {
      toast.warning("Please enter customer name");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Cart is empty");
      return;
    }

    createOrder({
      table: selectedTable,
      customerName,
      partySize,
      items: cart,
      notes,
    });

    toast.success("Order sent to kitchen 🍽️");

    setCart([]);
    setNotes("");
    setCustomerName("");
    setPartySize(1);
    setSelectedTable(null);
    setCartOpen(false);

    navigate("/");
  };
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      {/* CUSTOMER INFO */}

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-500 block mb-1">
            Customer Name
          </label>

          <input
            type="text"
            placeholder="Example: John"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="
              w-full
              border
              border-gray-200
              rounded-lg
              px-4
              py-2
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        <div>
          <label className="text-sm text-gray-500 block mb-1">Party Size</label>

          <input
            type="number"
            min="1"
            value={partySize}
            onChange={(e) => setPartySize(Number(e.target.value))}
            className="
              w-full
              border
              border-gray-200
              rounded-lg
              px-4
              py-2
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>
      </div>

      {/* TABLE LEGEND */}

      <p className="text-sm text-gray-500 mb-3 font-medium">Select Table</p>

      <div className="flex gap-6 text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-white border rounded-full"></span>
          Available
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          Selected
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          Occupied
        </div>
      </div>

      {/* TABLE SELECTOR */}

      <TableSelector
        tables={tables}
        selectedTable={selectedTable}
        onSelect={setSelectedTable}
        orders={orders}
      />

      {/* MENU GRID */}

      <MenuGrid onAdd={addItem} onRemove={removeItem} cart={cart} />

      {/* CART BUTTON */}

      <CartButton
        count={cart.reduce((sum, item) => sum + item.qty, 0)}
        onOpen={() => setCartOpen(true)}
      />

      {/* CART DRAWER */}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartSummary
          cart={cart}
          total={total}
          notes={notes}
          setNotes={setNotes}
          selectedTable={selectedTable}
          onCreateOrder={handleCreateOrder}
          setCart={setCart}
        />
      </CartDrawer>
    </div>
  );
}

export default Menu;
