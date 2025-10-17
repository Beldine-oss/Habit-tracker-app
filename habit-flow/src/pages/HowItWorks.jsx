import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#b89e6f] flex flex-col items-center justify-start px-6 py-6">
      {/* Page Heading */}
      <h1 className="text-6xl font-[Lovelace] text-[#fffcf0] text-center mb-4">
        How It Works
      </h1>

      <p className="text-[#fffcf0] text-xl text-center max-w-2xl leading-relaxed mb-10">
        HabitFlow helps you turn small daily actions into long-term success. 
        Create habits, track progress, and stay consistent with built-in motivation tools.
      </p>

      {/* Three Buttons Row */}
      <div className="flex flex-row gap-8 flex-wrap justify-center w-full max-w-6xl mb-12">
        <button className="bg-[#fffcf0] text-[#695125] px-6 py-8 rounded-lg shadow-md font-semibold hover:bg-[#efe6d8] transition flex-1 min-w-[250px]">
          <span className="font-bold block mb-2">Create Your Habits</span>
          Set up habits in categories like Health, Learning, or Mindfulness.
        </button>

        <button className="bg-[#fffcf0] text-[#695125] px-6 py-8 rounded-lg shadow-md font-semibold hover:bg-[#efe6d8] transition flex-1 min-w-[250px]">
          <span className="font-bold block mb-2">Track Daily</span>
          Simple one-tap completion with optional notes and reflections.
        </button>

        <button className="bg-[#fffcf0] text-[#695125] px-6 py-8 rounded-lg shadow-md font-semibold hover:bg-[#efe6d8] transition flex-1 min-w-[250px]">
          <span className="font-bold block mb-2">Build Momentum</span>
          Watch your streaks grow and celebrate your progress.
        </button>
      </div>

      {/* Back to Home */}
      <Link
        to="/"
        className="mt-auto mb-6 bg-[#fffcf0] text-[#695125] px-8 py-3 rounded-full font-medium hover:bg-[#efe6d8] transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
