function TableSelector({ tables, selectedTable, onSelect, orders }) {
  const occupiedTables = orders
    .filter((o) => o.status !== "served")
    .map((o) => o.table);

  return (
    <div className="mb-8">
      <p className="text-sm text-gray-500 mb-2">Select Table</p>

      <div className="flex gap-2 flex-wrap">
        {tables.map((table) => {
          const isOccupied = occupiedTables.includes(table);

          return (
            <button
              key={table}
              disabled={isOccupied}
              onClick={() => onSelect(table)}
              className={`
                px-4 py-2 rounded-lg border transition

                ${
                  isOccupied
                    ? "bg-red-100 text-red-600 border-red-200 cursor-not-allowed"
                    : selectedTable === table
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-200 hover:bg-gray-100"
                }
              `}
            >
              Table {table}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TableSelector;
