export default function App() {
  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <button
        onClick={scrollToHowItWorks}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-16"
      >
        Start Building Habits
      </button>

      {/* Features Section */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full text-center justify-items-center">
        {[
          ["Set Goals", "Create personalized habits across different categories.", "#e6ccb2"],
          ["Track Progress", "Simple one-tap logging to mark habits as complete.", "#d4a373"],
          ["Build Streaks", "Stay motivated with visual progress and streak counters.", "#b79b87"],
          ["Calendar View", "See your progress at a glance.", "#c9a37a"],
          ["Daily Quotes", "Get inspired with daily quotes and motivation.", "#a68a64"],
          ["Personalized", "Organize habits by categories that matter to you.", "#8b6f47"],
        ].map(([title, desc, color], i) => (
          <button
            key={i}
            className="w-full max-w-xs h-40 p-5 rounded-full shadow-md transition text-black flex flex-col items-center justify-center mx-auto hover:opacity-90"
            style={{ backgroundColor: color }}
          >
            <h2 className="text-xl font-bold mb-1">{title}</h2>
            <p className="text-sm">{desc}</p>
          </button>
        ))}
      </div>

      {/* How It Works Section */}
      <div
        id="how-it-works"
        className="w-full bg-[#b89e6f] text-[#fffcf0] text-center py-20 mt-20 rounded-2xl"
      >
        <h2 className="text-5xl font-[Lovelace]">How It Works</h2>
      </div>
    </div>
  );
}
