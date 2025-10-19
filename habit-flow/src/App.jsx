import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showTracker, setShowTracker] = useState(false);
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);
  const [completedHabits, setCompletedHabits] = useState([]);
  const [streaks, setStreaks] = useState({});

  // ✅ Load saved habits and streaks from localStorage on page load
  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    const savedStreaks = JSON.parse(localStorage.getItem("streaks")) || {};
    const savedCompleted = JSON.parse(localStorage.getItem("completedHabits")) || [];

    setHabits(savedHabits);
    setStreaks(savedStreaks);
    setCompletedHabits(savedCompleted);
  }, []);

  // ✅ Save habits, completed, and streaks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem("completedHabits", JSON.stringify(completedHabits));
  }, [completedHabits]);

  useEffect(() => {
    localStorage.setItem("streaks", JSON.stringify(streaks));
  }, [streaks]);

  // ✅ Add new habit
  const handleAddHabit = (e) => {
    e.preventDefault();
    if (habit.trim() && !habits.includes(habit)) {
      setHabits([...habits, habit]);
      setHabit("");
      setShowForm(false);
    }
  };

  // ✅ Toggle completion & streaks
  const toggleComplete = (habitName) => {
    setCompletedHabits((prev) => {
      const isCompleted = prev.includes(habitName);
      if (isCompleted) {
        // Uncheck habit — remove from completed
        return prev.filter((h) => h !== habitName);
      } else {
        // Check habit — mark complete and increase streak
        setStreaks((prevStreaks) => ({
          ...prevStreaks,
          [habitName]: prevStreaks[habitName] ? prevStreaks[habitName] + 1 : 1,
        }));
        return [...prev, habitName];
      }
    });
  };

  // ✅ Six features as before
  const features = [
    {
      title: "Set Goals",
      desc: "Create personalized habits across different categories.",
      bg: "#b79b87",
      action: () => setShowForm(true),
    },
    {
      title: "Track Progress",
      desc: "Simple one-tap logging to mark habits as complete.",
      bg: "#b89e6f",
      action: () => setShowTracker(true),
    },
    {
      title: "Build Streaks",
      desc: "Stay motivated with visual progress and streak counters.",
      bg: "#b89e6f",
      action: () => setShowTracker(true),
    },
    {
      title: "Calendar View",
      desc: "See your progress at a glance.",
      bg: "#efe3b8",
      action: () => alert("Calendar view coming soon!"),
    },
    {
      title: "Daily Quotes",
      desc: "Get inspired with daily quotes and motivation.",
      bg: "#b79b87",
      action: () => alert("Motivational quotes feature coming soon!"),
    },
    {
      title: "Personalized",
      desc: "Organize habits by categories that matter to you.",
      bg: "#b89e6f",
      action: () => alert("Customization feature coming soon!"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf0] flex flex-col items-center justify-center px-6 py-12">
      {/* ✅ Logo */}
      <img
        src={logo}
        alt="HabitFlow Logo"
        className="mb-4 object-contain"
        style={{ width: 40, height: 40 }}
      />

      {/* ✅ App Title */}
      <h1 className="text-5xl font-bold text-[#695125] text-center mb-6">
        HabitFlow
      </h1>

      {/* ✅ Description */}
      <p className="max-w-2xl text-lg text-[#695125] text-center mb-10 leading-relaxed">
        Transform your life one habit at a time. Track, build, and maintain daily routines
        to help you achieve your personal development goals.
      </p>

      {/* ✅ Start Building Habits */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-10"
      >
        Start Building Habits
      </button>

      {/* ✅ Habit Form */}
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

      {/* ✅ Habit Tracker */}
      {showTracker && habits.length > 0 && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">
            Track Your Habits
          </h3>
          <ul className="space-y-3">
            {habits.map((h, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-white rounded-full px-4 py-2 shadow"
              >
                <span
                  className={`${
                    completedHabits.includes(h)
                      ? "line-through text-green-600"
                      : "text-[#695125]"
                  } text-lg`}
                >
                  {h}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#b89e6f]">
                    🔥 {streaks[h] || 0}
                  </span>
                  <input
                    type="checkbox"
                    checked={completedHabits.includes(h)}
                    onChange={() => toggleComplete(h)}
                    className="w-5 h-5 accent-[#b89e6f]"
                  />
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowTracker(false)}
            className="mt-6 bg-gray-300 text-[#695125] px-6 py-2 rounded-full hover:bg-gray-400 transition w-full"
          >
            Close Tracker
          </button>
        </div>
      )}

      {/* ✅ Show Habits */}
      {habits.length > 0 && !showTracker && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">
            Your Habits
          </h3>
          <ul className="space-y-2 text-[#695125]">
            {habits.map((h, i) => (
              <li
                key={i}
                className="bg-white rounded-full px-4 py-2 shadow text-center"
              >
                {h} <span className="text-sm text-[#b89e6f]">🔥 {streaks[h] || 0}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Feature Buttons */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full text-center justify-items-center mt-12">
        {features.map((feature, i) => (
          <button
            key={i}
            onClick={feature.action}
            className="w-full max-w-xs h-40 p-5 rounded-full shadow-md transition text-black flex flex-col items-center justify-center mx-auto hover:scale-105 duration-200"
            style={{ backgroundColor: feature.bg }}
          >
            <h2 className="text-xl font-bold mb-1">{feature.title}</h2>
            <p className="text-sm">{feature.desc}</p>
          </button>
        ))}
      </div>

      {/* ✅ How It Works Section */}
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
