import { useState, useEffect } from "react";

let globalOrders = JSON.parse(localStorage.getItem("orders")) || [];
let listeners = [];

function save() {
  localStorage.setItem("orders", JSON.stringify(globalOrders));
}

function notify() {
  listeners.forEach((l) => l([...globalOrders]));
}

// generar número de orden visible para cocina
function generateOrderNumber() {
  const last = globalOrders[globalOrders.length - 1];
  return last ? last.orderNumber + 1 : 1;
}

export function useOrders() {

  const [orders, setOrders] = useState(globalOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    listeners.push(setOrders);

    return () => {
      listeners = listeners.filter((l) => l !== setOrders);
    };
  }, []);

  const createOrder = (data) => {

    // verificar si la mesa ya tiene orden activa
    const tableBusy = globalOrders.some(
      (order) =>
        order.table === data.table && order.status !== "served"
    );

    if (tableBusy) {
      alert(`Table ${data.table} already has an active order`);
      return;
    }

    const now = Date.now();

    const newOrder = {
      id: now,

      // 🆕 número de orden para cocina
      orderNumber: generateOrderNumber(),

      table: data.table,

      // 🆕 cliente
      customerName: data.customerName || "",

      // 🆕 número de personas
      partySize: data.partySize || 1,

      status: "pending",

      createdAt: now,

      // 🆕 tiempo estimado preparación
      estimatedPrepTime: 10, // minutos

      items: data.items,

      notes: data.notes || "",

      // 🆕 prioridad automática
      priority: data.items.length >= 5 ? "high" : "normal"
    };

    globalOrders = [...globalOrders, newOrder];

    save();
    notify();
  };

  const deleteOrder = (id) => {

    globalOrders = globalOrders.filter(o => o.id !== id);

    save();
    notify();

    if (selectedOrder?.id === id) {
      setSelectedOrder(null);
    }

  };

  const updateOrderStatus = (id, status) => {

    globalOrders = globalOrders.map(order =>
      order.id === id ? { ...order, status } : order
    );

    save();
    notify();
  };

  return {
    orders,
    selectedOrder,
    setSelectedOrder,
    createOrder,
    deleteOrder,
    updateOrderStatus
  };
}