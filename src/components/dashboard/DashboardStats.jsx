import { useSwipeable } from "react-swipeable";

const ORDER_STATUSES = [
  {
    key: "pending",
    label: "Pending",
    active: "bg-amber-500 text-white",
    idle: "bg-amber-50 text-amber-700 hover:bg-amber-100",
    badge: "bg-white/20 text-white",
    badgeIdle: "bg-amber-200 text-amber-800",
  },
  {
    key: "preparing",
    label: "Preparing",
    active: "bg-blue-600 text-white",
    idle: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    badge: "bg-white/20 text-white",
    badgeIdle: "bg-blue-200 text-blue-800",
  },
  {
    key: "served",
    label: "Served",
    active: "bg-emerald-600 text-white",
    idle: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
    badge: "bg-white/20 text-white",
    badgeIdle: "bg-emerald-200 text-emerald-800",
  },
];

function DashboardStats({ orders, onFilter, activeFilter }) {
  const getCount = (status) => orders.filter((o) => o.status === status).length;

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      const index = ORDER_STATUSES.findIndex((s) => s.key === activeFilter);
      if (index < ORDER_STATUSES.length - 1) {
        onFilter(ORDER_STATUSES[index + 1].key);
      }
    },
    onSwipedRight: () => {
      const index = ORDER_STATUSES.findIndex((s) => s.key === activeFilter);
      if (index > 0) {
        onFilter(ORDER_STATUSES[index - 1].key);
      }
    },
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="
        flex gap-3
        overflow-x-auto
        scroll-smooth
        snap-x snap-mandatory
        pb-4
        px-1
        scrollbar-none
      "
    >
      {ORDER_STATUSES.map((status) => {
        const isActive = activeFilter === status.key;
        const count = getCount(status.key);

        return (
          <button
            key={status.key}
            onClick={() => onFilter(status.key)}
            className={`
              snap-start
              flex-shrink-0
              min-w-[130px]

              flex items-center justify-center gap-2
              px-5 py-2

              rounded-full
              text-sm font-semibold
              transition-all duration-200
              shadow-sm
              whitespace-nowrap

              ${isActive ? status.active : status.idle}
            `}
          >
            {status.label}

            <span
              className={`
                px-2 py-0.5
                text-xs
                font-bold
                rounded-full
                ${isActive ? status.badge : status.badgeIdle}
              `}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default DashboardStats;
