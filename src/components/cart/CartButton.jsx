function CartButton({ count, onOpen }) {
  if (count === 0) return null;

  return (
    <button
      onClick={onOpen}
      className="
        fixed
        bottom-6
        right-6
        bg-black
        text-white
        px-5
        py-3
        rounded-full
        shadow-lg
        flex
        items-center
        gap-2
        text-sm
        font-semibold
      "
    >
      🛒 Cart ({count})
    </button>
  );
}

export default CartButton;
