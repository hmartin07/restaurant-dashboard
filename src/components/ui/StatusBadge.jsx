import { FaClock, FaFire, FaCheck } from "react-icons/fa";

function StatusBadge({ status }) {
  const styles = {
    pending: {
      label: "Pending",
      class: "bg-yellow-100 text-yellow-700",
      icon: <FaClock className="mr-1" />,
    },
    preparing: {
      label: "Preparing",
      class: "bg-blue-100 text-blue-700",
      icon: <FaFire className="mr-1" />,
    },
    served: {
      label: "Served",
      class: "bg-green-100 text-green-700",
      icon: <FaCheck className="mr-1" />,
    },
  };

  const current = styles[status] || styles.pending;

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ${current.class}
      `}
    >
      {current.icon}
      {current.label}
    </span>
  );
}

export default StatusBadge;
