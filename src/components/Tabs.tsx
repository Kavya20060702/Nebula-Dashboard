const tabs = [
  "All",
  "Delivered",
  "Late",
  "Modified",
  "Cancelled",
  "Upcoming",
];

const Tabs = () => {
  return (
    <div className="flex gap-8 mt-8 text-sm">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`
          transition
          hover:text-black
          ${
            index === 0
              ? "text-orange-500 font-semibold"
              : "text-gray-600"
          }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;