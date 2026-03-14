import { useState } from "react";

function MenuItem({ item, onAdd, onRemove, cart }) {
  const [openImage, setOpenImage] = useState(false);

  const cartItem = cart.find((i) => i.id === item.id);
  const qty = cartItem ? cartItem.qty : 0;

  const add = () => onAdd(item);
  const remove = () => onRemove(item);

  return (
    <>
      <div
        className="
        group
        bg-white
        rounded-xl
        shadow-sm
        hover:shadow-lg
        transition
        overflow-hidden
        border border-gray-100
      "
      >
        {/* IMAGE */}

        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            onClick={() => setOpenImage(true)}
            className="
              w-full
              h-36
              object-cover
              cursor-pointer
              group-hover:scale-[1.03]
              transition
            "
          />

          {/* IMAGE OVERLAY */}

          <div
            onClick={() => setOpenImage(true)}
            className="
              absolute inset-0
              bg-black/0
              group-hover:bg-black/30
              transition
              flex
              items-center
              justify-center
              opacity-0
              group-hover:opacity-100
              cursor-pointer
            "
          >
            <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-md">
              View
            </span>
          </div>

          {/* PRICE BADGE */}

          <span
            className="
              absolute
              top-2
              right-2
              bg-white/90
              text-gray-900
              text-xs
              font-semibold
              px-2 py-1
              rounded-md
              shadow
            "
          >
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* CONTENT */}

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 text-sm mb-3">
            {item.name}
          </h3>

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
            <div
              className="
                flex
                items-center
                justify-between
                border
                rounded-lg
                overflow-hidden
              "
            >
              <button
                onClick={remove}
                className="
                  px-3
                  py-2
                  bg-gray-100
                  hover:bg-gray-200
                  transition
                "
              >
                −
              </button>

              <span className="font-semibold text-sm">{qty}</span>

              <button
                onClick={add}
                className="
                  px-3
                  py-2
                  bg-gray-100
                  hover:bg-gray-200
                  transition
                "
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {/* IMAGE MODAL */}

      {openImage && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            z-50
          "
          onClick={() => setOpenImage(false)}
        >
          <div
            className="
              relative
              max-w-2xl
              w-full
              p-4
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-xl shadow-lg"
            />

            <button
              onClick={() => setOpenImage(false)}
              className="
                absolute
                top-3
                right-3
                bg-white
                rounded-full
                px-3
                py-1
                text-sm
                shadow
                hover:bg-gray-100
              "
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
