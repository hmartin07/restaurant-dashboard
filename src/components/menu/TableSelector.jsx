function TableSelector({ tables, selectedTable, onSelect, orders }) {
  const activeOrders = orders.filter((o) => o.status !== "served");

  return (
    <div className="mb-8">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tables.map((table) => {
          const order = activeOrders.find((o) => o.table === table);
          const isOccupied = !!order;

          return (
            <button
              key={table}
              disabled={isOccupied}
              onClick={() => onSelect(table)}
              className={`
                relative
                px-4 py-3
                rounded-xl
                border
                text-sm
                transition
                min-w-[70px]
                font-medium

                ${
                  isOccupied
                    ? "bg-red-100 border-red-300 text-red-700 cursor-not-allowed"
                    : selectedTable === table
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-gray-50 border-gray-200"
                }
              `}
            >
              Table {table}
              {isOccupied && (
                <span className="absolute top-1 right-2 text-xs">🔴</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TableSelector;
