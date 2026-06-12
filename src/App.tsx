import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a]">
      {/* Floating Gradient Blob 1 */}
      <div
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-pink-500/30
        blur-3xl
        "
      />

      {/* Floating Gradient Blob 2 */}
      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/30
        blur-3xl
        "
      />

      {/* Floating Gradient Blob 3 */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[400px]
        h-[400px]
        rounded-full
        bg-purple-500/20
        blur-3xl
        "
      />

      <Dashboard />
    </div>
  );
}

export default App;