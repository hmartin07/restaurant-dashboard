function StatusBadge({ status }) {
  const styles = {
    pending: "bg-yellow-100 text-yellow-700",
    preparing: "bg-blue-100 text-blue-700",
    served: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`
px-3
py-1
rounded-full
text-sm
font-semibold
${styles[status]}
`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
