import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg"; // ✅ Ensure your logo file is inside src/assets/

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      setHabits([...habits, habit]);
      setHabit("");
      setShowForm(false);
    }
  };

  const features = [
    { title: "Set Goals", desc: "Create personalized habits across different categories.", bg: "#b79b87" },
    { title: "Track Progress", desc: "Simple one-tap logging to mark habits as complete.", bg: "#b89e6f" },
    { title: "Build Streaks", desc: "Stay motivated with visual progress and streak counters.", bg: "#b89e6f" },
    { title: "Calendar View", desc: "See your progress at a glance.", bg: "#efe3b8" },
    { title: "Daily Quotes", desc: "Get inspired with daily quotes and motivation.", bg: "#b79b87" },
    { title: "Personalized", desc: "Organize habits by categories that matter to you.", bg: "#b89e6f" },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf0] flex flex-col items-center justify-center px-6 py-12">
  {/* ✅ Logo at the top */}
  <img
    src={logo}
    alt="HabitFlow Logo"
    width={40}
    height={40}
    className="mb-4 object-contain"
    style={{ width: 40, height: 40, maxWidth: 40, maxHeight: 40 }}
  />

      {/* ✅ App Title */}
      <h1 className="text-5xl font-bold text-[#695125] text-center mb-6">HabitFlow</h1>

      {/* ✅ Description */}
      <p className="max-w-2xl text-lg text-[#695125] text-center mb-10 leading-relaxed">
        Transform your life one habit at a time. Track, build and maintain daily routines
        to help you achieve your personal development goals.
      </p>

      {/* ✅ Start Building Habits button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-10"
      >
        Start Building Habits
      </button>

      {/* ✅ Habit Creation Form */}
      {showForm && (
        <form
          onSubmit={handleAddHabit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center mb-8"
        >
          <h2 className="text-2xl font-semibold text-[#695125] mb-4">Add a New Habit</h2>
          <input
            type="text"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            placeholder="Enter a habit (e.g., Drink water)"
            className="border border-gray-300 rounded-full px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#b89e6f]"
          />
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-[#b89e6f] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Add Habit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 text-[#695125] px-6 py-2 rounded-full hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* ✅ Display user-added habits */}
      {habits.length > 0 && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">Your Habits</h3>
          <ul className="space-y-2 text-[#695125]">
            {habits.map((h, i) => (
              <li key={i} className="bg-white rounded-full px-4 py-2 shadow text-center">
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Feature Buttons Grid */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full text-center justify-items-center mt-12">
        {features.map((feature, i) => (
          <button
            key={i}
            className="w-full max-w-xs h-40 p-5 rounded-full shadow-md transition text-black flex flex-col items-center justify-center mx-auto"
            style={{ backgroundColor: feature.bg }}
          >
            <h2 className="text-xl font-bold mb-1">{feature.title}</h2>
            <p className="text-sm">{feature.desc}</p>
          </button>
        ))}
      </div>

      {/* ✅ How It Works section */}
      <div
        id="how-it-works"
        className="w-full bg-[#b89e6f] text-[#fffcf0] text-center py-20 mt-20 rounded-2xl"
      >
        <Link
          to="/how-it-works"
          className="text-5xl font-[Lovelace] hover:underline transition"
        >
          How It Works
        </Link>
      </div>
    </div>
  );
}

export default Home;
