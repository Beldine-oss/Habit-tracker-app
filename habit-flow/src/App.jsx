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
        <div className="grid grid-cols-2 gap-8 max-w-4xl w-full text-center">
          {/* Feature Buttons */}
          <div className="bg-gradient-to-r from-[#b79b87] to-[#c5ad90] px-12 py-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#c5ad90] hover:to-[#b79b87]">
            <h2 className="text-xl font-bold text-black mb-1">Set Goals</h2>
            <p className="text-black text-sm">Create personalized habits across different categories.</p>
          </div>

          <div className="bg-gradient-to-r from-[#b89e6f] to-[#d1b88a] px-12 py-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#d1b88a] hover:to-[#b89e6f]">
            <h2 className="text-xl font-bold text-black mb-1">Track Progress</h2>
            <p className="text-black text-sm">Simple one-tap logging to mark habits as complete.</p>
          </div>

          <div className="bg-gradient-to-r from-[#b89e6f] to-[#e0c997] px-12 py-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#e0c997] hover:to-[#b89e6f]">
            <h2 className="text-xl font-bold text-black mb-1">Build Streaks</h2>
            <p className="text-black text-sm">Stay motivated with visual progress and streak counters.</p>
          </div>

          <div className="bg-gradient-to-r from-[#efe3b8] to-[#d8c895] px-12 py-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#d8c895] hover:to-[#efe3b8]">
            <h2 className="text-xl font-bold text-black mb-1">Calendar View</h2>
            <p className="text-black text-sm">See your progress at a glance.</p>
          </div>

          <div className="bg-gradient-to-r from-[#b79b87] to-[#cdb59a] px-12 py-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#cdb59a] hover:to-[#b79b87]">
            <h2 className="text-xl font-bold text-black mb-1">Daily Quotes</h2>
            <p className="text-black text-sm">Get inspired with daily quotes and motivation.</p>
          </div>

          <div className="bg-gradient-to-r from-[#b89e6f] to-[#c9b180] px-12 py-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#c9b180] hover:to-[#b89e6f]">
            <h2 className="text-xl font-bold text-black mb-1">Personalized</h2>
            <p className="text-black text-sm">Organize habits by categories that matter to you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
