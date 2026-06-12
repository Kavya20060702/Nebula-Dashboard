import { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  MessageCircle,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState(0);

  const menuItems = [
    { icon: LayoutDashboard },
    { icon: FolderKanban },
    { icon: Users },
    { icon: MessageCircle },
    { icon: Settings },
  ];

  return (
    <div
      className="
      hidden lg:flex
      w-24
      bg-white/10
      backdrop-blur-3xl
      border-r
      border-white/20
      flex-col
      items-center
      py-6
      gap-4
      "
    >
      {/* Logo */}

      <div
        className="
        w-14
        h-14
        rounded-2xl
        bg-white/20
        backdrop-blur-xl
        border
        border-white/20
        flex
        items-center
        justify-center
        mb-6
        shadow-lg
        "
      >
        <span className="text-xl font-bold">G</span>
      </div>

      {/* Menu Items */}

      {menuItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              p-4
              rounded-2xl
              transition-all
              duration-300

              ${
                active === index
                  ? "bg-white/30 shadow-lg scale-105"
                  : "hover:bg-white/20"
              }
            `}
          >
            <Icon size={22} />
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;