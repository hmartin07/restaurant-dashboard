import { useState } from "react";
import { menuItems } from "../../data/menuItems";
import MenuItem from "./MenuItem";

function MenuGrid({ onAdd, onRemove, cart }) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const categories = ["all", "Main", "Sides", "Drinks"];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search menu item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
          focus:ring-gray-800
        "
      />

      {/* CATEGORIES */}

      <div className="flex gap-2 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`
              px-3 py-1
              rounded-lg
              text-sm
              border
              transition
              font-medium
              ${
                category === c
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white border-gray-200 hover:bg-gray-100"
              }
            `}
          >
            {c === "all" ? "All" : c}
          </button>
        ))}
      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onAdd={onAdd}
            onRemove={onRemove}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuGrid;
