export default function App() {
  return (
    <div className="min-h-screen bg-[#fffcf0] flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <h1 className="text-5xl font-bold text-[#695125] text-center mb-6">
        HabitFlow
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-lg text-[#695125] text-center mb-10 leading-relaxed">
        Transform your life one habit at a time. Track, build and maintain daily routines
        to help you achieve your personal development goals.
      </p>

      {/* Start Button */}
      <button className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-16">
        Start Building Habits
      </button>

  {/* Features Section */}
  <div className="grid grid-cols-2 gap-8 max-w-3xl w-full justify-items-center text-center">
        {[
          { title: "Set Goals", desc: "Create personalized habits across different categories.", color: "#b79b87" },
          { title: "Track Progress", desc: "Simple one-tap logging to mark habits as complete.", color: "#b89e6f" },
          { title: "Build Streaks", desc: "Stay motivated with visual progress and streak counters.", color: "#b89e6f" },
          { title: "Calendar View", desc: "See your progress at a glance.", color: "#efe3b8" },
          { title: "Daily Quotes", desc: "Get inspired with daily quotes and motivation.", color: "#b79b87" },
          { title: "Personalized", desc: "Organize habits by categories that matter to you.", color: "#b89e6f" },
        ].map((feature, index) => (
          <div
            key={index}
            className="rounded-full shadow-md py-3 px-6 w-full max-w-xs hover:scale-105 transition transform"
            style={{ backgroundColor: feature.color }}
          >
            <h2 className="text-lg font-semibold text-black mb-1">{feature.title}</h2>
            <p className="text-sm text-black">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
