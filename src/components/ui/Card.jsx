function Card({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
bg-white
rounded-xl
shadow-md
p-4
hover:shadow-xl
transition
cursor-pointer
"
    >
      {children}
    </div>
  );
}

export default Card;
