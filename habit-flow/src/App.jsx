function App() {
  return (
    <div className="min-h-screen bg-[#fffcf0] flex flex-col items-center justify-center text-center px-6 py-10 font-sans">
      {/* Header */}
      <h1 className="text-5xl font-bold text-[#695125] mb-4">HabitFlow</h1>
      <p className="text-lg text-[#695125] mb-8 max-w-2xl">
        Transform your life one habit at a time. Track, build and maintain daily routines
        to help you achieve your personal development goals.
      </p>

      {/* CTA Button */}
      <button className="bg-[#b79b87] text-black py-3 px-8 rounded-xl mb-12 shadow-md hover:opacity-90 transition">
        Start Building Habits
      </button>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* 1 */}
        <div className="bg-[#b79b87] rounded-xl p-6 shadow hover:opacity-95 transition">
          <h2 className="text-xl font-semibold text-black mb-2">Set Goals</h2>
          <p className="text-black">
            Create personalized habits across different categories.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-[#b89e6f] rounded-xl p-6 shadow hover:opacity-95 transition">
          <h2 className="text-xl font-semibold text-black mb-2">Track Progress</h2>
          <p className="text-black">
            Simple one-tap logging to mark habits as complete.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-[#b89e6f] rounded-xl p-6 shadow hover:opacity-95 transition">
          <h2 className="text-xl font-semibold text-black mb-2">Build Streaks</h2>
          <p className="text-black">
            Stay motivated with visual progress and streak counters.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-[#efe3b8] rounded-xl p-6 shadow hover:opacity-95 transition">
          <h2 className="text-xl font-semibold text-black mb-2">Calendar View</h2>
          <p className="text-black">
            See your progress at a glance.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-[#b79b87] rounded-xl p-6 shadow hover:opacity-95 transition">
          <h2 className="text-xl font-semibold text-black mb-2">Daily Quotes</h2>
          <p className="text-black">
            Get inspired with daily quotes and motivation.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-[#b89e6f] rounded-xl p-6 shadow hover:opacity-95 transition">
          <h2 className="text-xl font-semibold text-black mb-2">Personalized</h2>
          <p className="text-black">
            Organize habits by categories that matter to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
