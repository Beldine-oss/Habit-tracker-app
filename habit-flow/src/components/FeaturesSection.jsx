export default function FeaturesSection() {
  const features = [
    { title: "Set Goals", desc: "Create personalized habits across different categories." },
    { title: "Track Progress", desc: "Simple one-tap logging to mark habits as complete." },
    { title: "Build Streaks", desc: "Stay motivated with visual progress and streak counters." },
    { title: "Calendar View", desc: "See your progress at a glance." },
    { title: "Daily Quotes", desc: "Get inspired with daily quotes and motivation." },
    { title: "Personalized", desc: "Organize habits by categories that matter to you." },
  ];

  return (
    <section className="text-center p-8 flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">HabitFlow Features</h1>

      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {features.map((feature, index) => (
          <button
            key={index}
            className="bg-white border border-indigo-200 shadow-md rounded-2xl p-6 w-64 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-sm">{feature.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
