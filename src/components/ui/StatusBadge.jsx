function StatusBadge({ status }) {
  const styles = {
    pending: {
      label: "PENDING",
      class: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    },
    preparing: {
      label: "PREPARING",
      class: "bg-blue-100 text-blue-700 border border-blue-200",
    },
    served: {
      label: "SERVED",
      class: "bg-green-100 text-green-700 border border-green-200",
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
        text-xs
        font-semibold
        tracking-wide
        ${current.class}
      `}
    >
      {current.label}
    </span>
  );
}

export default StatusBadge;
