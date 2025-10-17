import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#b89e6f] flex flex-col items-center justify-center px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-6xl font-[Lovelace] text-[#fffcf0] text-center mb-6">
        How It Works
      </h1>

      <p className="text-[#fffcf0] text-lg text-center max-w-2xl leading-relaxed mb-12">
        HabitFlow helps you turn small daily actions into long-term success. 
        Create habits, track progress, and stay consistent with built-in motivation tools.
      </p>

      {/* Three Buttons Row */}
      <div className="flex flex-row gap-8">
        <button className="bg-[#fffcf0] text-[#695125] px-6 py-4 rounded-lg shadow-md font-semibold hover:bg-[#efe6d8] transition">
          Step 1
        </button>
        <button className="bg-[#fffcf0] text-[#695125] px-6 py-4 rounded-lg shadow-md font-semibold hover:bg-[#efe6d8] transition">
          Step 2
        </button>
        <button className="bg-[#fffcf0] text-[#695125] px-6 py-4 rounded-lg shadow-md font-semibold hover:bg-[#efe6d8] transition">
          Step 3
        </button>
      </div>

      {/* Back to Home */}
      <Link
        to="/"
        className="mt-12 bg-[#fffcf0] text-[#695125] px-8 py-3 rounded-full font-medium hover:bg-[#efe6d8] transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
