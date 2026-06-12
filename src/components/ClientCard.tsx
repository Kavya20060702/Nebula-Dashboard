import { motion } from "framer-motion";

type ClientCardProps = {
  name: string;
  logo: string;
};

const ClientCard = ({ name, logo }: ClientCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        bg-white/15
        backdrop-blur-2xl
        border border-white/20
        rounded-2xl
        p-5
        text-center
        shadow-[0_8px_32px_rgba(31,38,135,0.1)]
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <img
        src={logo}
        alt={name}
        className="
          w-14
          h-14
          mx-auto
          object-contain
          mb-4
        "
      />

      <h3 className="font-semibold text-lg">
        {name}
      </h3>

      <p className="text-sm text-gray-600">
        50+ Projects
      </p>
    </motion.div>
  );
};

export default ClientCard;