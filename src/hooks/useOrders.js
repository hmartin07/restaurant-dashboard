import { useState, useEffect } from "react";

let globalOrders = JSON.parse(localStorage.getItem("orders")) || [];
let listeners = [];

function save() {
  localStorage.setItem("orders", JSON.stringify(globalOrders));
}

function notify() {
  listeners.forEach((l) => l([...globalOrders]));
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

  // 🚫 verificar si la mesa ya tiene orden activa
  const tableBusy = globalOrders.some(
    (order) =>
      order.table === data.table && order.status !== "served"
  );

  if (tableBusy) {
    alert(`Table ${data.table} already has an active order`);
    return;
  }

  const newOrder = {
    id: Date.now(),
    table: data.table,
    status: "pending",
    createdAt: Date.now(),
    items: data.items,
    notes: data.notes
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