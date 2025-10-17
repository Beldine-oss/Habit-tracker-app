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
      <button className="bg-[#b89e6f] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:opacity-90 transition mb-16">
        Start Building Habits
      </button>

      {/* Features Section */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 gap-6 max-w-4xl text-center">
          {/* Feature Buttons */}
          <div className="bg-[#b79b87] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
            <h2 className="text-xl font-bold text-black mb-2">Set Goals</h2>
            <p className="text-black">Create personalized habits across different categories.</p>
          </div>

          <div className="bg-[#b89e6f] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
            <h2 className="text-xl font-bold text-black mb-2">Track Progress</h2>
            <p className="text-black">Simple one-tap logging to mark habits as complete.</p>
          </div>

          <div className="bg-[#b89e6f] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
            <h2 className="text-xl font-bold text-black mb-2">Build Streaks</h2>
            <p className="text-black">Stay motivated with visual progress and streak counters.</p>
          </div>

          <div className="bg-[#efe3b8] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
            <h2 className="text-xl font-bold text-black mb-2">Calendar View</h2>
            <p className="text-black">See your progress at a glance.</p>
          </div>

          <div className="bg-[#b79b87] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
            <h2 className="text-xl font-bold text-black mb-2">Daily Quotes</h2>
            <p className="text-black">Get inspired with daily quotes and motivation.</p>
          </div>

          <div className="bg-[#b89e6f] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
            <h2 className="text-xl font-bold text-black mb-2">Personalized</h2>
            <p className="text-black">Organize habits by categories that matter to you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
