import { useState } from "react";

function MenuItem({ item, onAdd, onRemove, cart }) {
  const [openImage, setOpenImage] = useState(false);
  const cartItem = cart.find((i) => i.id === item.id);
  const qty = cartItem ? cartItem.qty : 0;

  const add = () => {
    onAdd(item);
  };

  const remove = () => {
    onRemove(item);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <img
          src={item.image}
          alt={item.name}
          onClick={() => setOpenImage(true)}
          className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
        />

        <h3 className="font-semibold text-gray-800">{item.name}</h3>

        <p className="text-sm text-gray-500 mb-3 font-medium">
          ${item.price.toFixed(2)}
        </p>

        {/* POS CONTROLS */}

        {qty === 0 ? (
          <button
            onClick={add}
            className="
              w-full
              bg-gray-900
              text-white
              py-2
              rounded-lg
              text-sm
              font-medium
              hover:bg-black
              transition
              active:scale-95
            "
          >
            Add
          </button>
        ) : (
          <div className="flex items-center justify-between border rounded-lg overflow-hidden">
            <button
              onClick={remove}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
            >
              -
            </button>

            <span className="font-semibold">{qty}</span>

            <button
              onClick={add}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* IMAGE MODAL */}

      {openImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpenImage(false)}
        >
          <div className="relative max-w-2xl w-full p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-lg"
            />

            <button
              onClick={() => setOpenImage(false)}
              className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItem;
