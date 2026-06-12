import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import { projects } from "../data/projects";
import profileImage from "../assets/kiki.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div
        className="
        w-full
        max-w-7xl
        h-[90vh]

        bg-white/5
        backdrop-blur-[30px]

        border
        border-white/20

        shadow-[0_8px_32px_rgba(31,38,135,0.2)]

        rounded-3xl
        overflow-hidden

        flex
        flex-col
        lg:flex-row
        "
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <Header />

          <h1 className="text-4xl font-bold mt-8 text-white">
            Manage Your Daily Projects
          </h1>

          <Tabs />

          <div className="mt-8 space-y-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                company={project.company}
                deadline={project.deadline}
                budget={project.budget}
                status={project.status}
              />
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="
          hidden
          xl:block

          w-[360px]

          border-l
          border-white/20

          p-6
          "
        >
          {/* Top Icons */}
          <div className="flex justify-between items-center">
            <button
              className="
              p-3
              rounded-xl
              bg-white/20
              backdrop-blur-xl
              "
            >
              🔔
            </button>

            <button
              className="
              p-3
              rounded-xl
              bg-white/20
              backdrop-blur-xl
              "
            >
              ⚙️
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src={profileImage}
              alt="Profile"
              className="
              w-14
              h-14
              rounded-full
              object-cover
              "
            />

            <div>
              <h3 className="font-semibold text-white">
                Kavya
              </h3>

              <p className="text-sm text-gray-600">
                Frontend Developer
              </p>
            </div>
          </div>

          {/* Clients */}
          <h2 className="font-semibold text-lg mt-5">
            Top Clients
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <ClientCard
              name="Google"
              logo="https://cdn.simpleicons.org/google"
            />

            <ClientCard
              name="Tesla"
              logo="https://cdn.simpleicons.org/tesla"
            />

            <ClientCard
              name="Spotify"
              logo="https://cdn.simpleicons.org/spotify"
            />

            <ClientCard
                name="OpenAI"
                logo="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
              />

              <ClientCard
                name="Adobe"
                logo="data:image/jpeg;base64,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"
              />

            <ClientCard
              name="NASA"
              logo="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;