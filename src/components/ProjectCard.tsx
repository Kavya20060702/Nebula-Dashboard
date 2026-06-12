type ProjectCardProps = {
  company: string;
  deadline: string;
  budget: string;
  status: string;
};

const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Delivered: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-700",
};

const ProjectCard = ({
  company,
  deadline,
  budget,
  status,
}: ProjectCardProps) => {
  return (
    <div
      className="
        bg-white/15
        backdrop-blur-2xl
        border border-white/20
        rounded-2xl
        p-6
        mt-4

        flex
        justify-between
        items-center

        hover:-translate-y-1
        transition-all
        duration-300

        shadow-lg
        "
    >
      <div>
        <h3 className="font-semibold">{company}</h3>
        <p className="text-sm text-gray-600">
          Project Type: Contact
        </p>
      </div>

      <p>{deadline}</p>

        <p className="text-sm">
        Download
        </p>

<p>{budget}</p>
      <span
        className={`
        px-4
        py-2
        rounded-full
        text-sm
        ${statusColors[status]}
        `}
      >
        {status}
      </span>
    </div>
  );
};

export default ProjectCard;