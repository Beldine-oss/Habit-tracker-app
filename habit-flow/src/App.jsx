export default function App() {
  const features = [
    { title: "Set Goals", desc: "Create personalized habits across different categories.", color: "#b79b87" },
    { title: "Track Progress", desc: "Simple one-tap logging to mark habits as complete.", color: "#b89e6f" },
    { title: "Build Streaks", desc: "Stay motivated with visual progress and streak counters.", color: "#b89e6f" },
    { title: "Calendar View", desc: "See your progress at a glance.", color: "#efe3b8" },
    { title: "Daily Quotes", desc: "Get inspired with daily quotes and motivation.", color: "#b79b87" },
    { title: "Personalized", desc: "Organize habits by categories that matter to you.", color: "#b89e6f" },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf0] flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <h1 className="text-5xl font-bold text-[#695125] text-center mb-6">
        HabitFlow
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-lg text-[#695125] text-center mb-10 leading-relaxed">
        Transform your life one habit at a time. Track, build, and maintain daily routines
        to help you achieve your personal development goals.
      </p>

      {/* Start Button */}
      <button className="bg-[#b89e6f] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:opacity-90 transition mb-16">
        Start Building Habits
      </button>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center justify-items-center w-full max-w-5xl">
        {features.map((feature, index) => (
          <button
            key={index}
            className="rounded-2xl shadow-md p-6 w-64 transition-transform transform hover:scale-105"
            style={{ backgroundColor: feature.color }}
          >
            <h2 className="text-xl font-bold text-black mb-2">{feature.title}</h2>
            <p className="text-black">{feature.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
