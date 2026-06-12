import { Search, Bell } from "lucide-react";

const Header = () => {
  const today = new Date().toDateString();

  return (
    <div className="flex flex-col gap-4">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div
          className="
          flex
          items-center
          gap-3

          bg-white/20
          backdrop-blur-xl

          border
          border-white/20

          px-4
          py-3

          rounded-2xl
          w-full
          max-w-md

          shadow-[0_8px_24px_rgba(255,255,255,0.15)]
          "
        >
          <Search size={18} />

          <input
            type="text"
            placeholder="Search projects..."
            className="
            bg-transparent
            outline-none
            w-full
            placeholder:text-gray-600
            "
          />
        </div>

        {/* Notification */}
        <button
          className="
          ml-4
          p-3
          rounded-2xl

          bg-white/20
          backdrop-blur-xl

          border
          border-white/20

          hover:bg-white/30
          transition-all
          "
        >
          <Bell size={20} />
        </button>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-300">
        {today}
      </p>
    </div>
  );
};

export default Header;