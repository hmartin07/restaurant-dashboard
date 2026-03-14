import { useEffect } from "react";

function CartDrawer({ open, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* OVERLAY */}

      <div
        onClick={onClose}
        className="
        fixed inset-0 z-40
        bg-black/30
        backdrop-blur-md
        transition-opacity
        duration-300
      "
      />

      {/* DRAWER */}

      <div
        className="
        fixed right-0 top-0 z-50
        h-full w-full sm:w-[420px]

        bg-white/80
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,0.25)]

        flex flex-col

        border-l border-white/30

        animate-slideIn
      "
      >
        {/* HEADER */}

        <div
          className="
          px-6 py-5
          flex items-center justify-between

          border-b border-gray-200/60
          bg-white/60
          backdrop-blur-md
        "
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
              Your Order
            </h2>

            <p className="text-xs text-gray-500">
              Review items before creating the order
            </p>
          </div>

          <button
            onClick={onClose}
            className="
            w-9 h-9
            flex items-center justify-center

            rounded-full
            bg-gray-100/70

            hover:bg-gray-200
            hover:scale-105

            text-gray-600
            transition
          "
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}

        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </>
  );
}

export default CartDrawer;
