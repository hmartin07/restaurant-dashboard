function OrderNotes({ notes, setNotes }) {
  return (
    <div>
      <label className="text-sm text-gray-500 block mb-1">Order Notes</label>

      <input
        type="text"
        placeholder="Example: No onions, extra sauce..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
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
  );
}

export default OrderNotes;
