import { useState } from "react"
import { mockOrders } from "../data/mockOrders"

export function useOrders() {

const [orders] = useState(mockOrders)
const [selectedOrder, setSelectedOrder] = useState(null)

return {
orders,
selectedOrder,
setSelectedOrder
}

}