import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [streaks, setStreaks] = useState({});
  const [showGoals, setShowGoals] = useState(false);
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  // ✅ Load from localStorage
  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    const savedStreaks = JSON.parse(localStorage.getItem("streaks")) || {};
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    setHabits(savedHabits);
    setStreaks(savedStreaks);
    setGoals(savedGoals);
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
    localStorage.setItem("streaks", JSON.stringify(streaks));
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [habits, streaks, goals]);

  // ✅ Add habit
  const addHabit = () => {
    const newHabit = prompt("Enter a new habit:");
    if (newHabit && newHabit.trim() !== "") {
      setHabits([...habits, newHabit]);
      setStreaks({ ...streaks, [newHabit]: { count: 0, lastCompleted: null } });
    }
  };

  // ✅ Toggle progress checkbox
  const toggleProgress = (habit) => {
    const today = new Date().toDateString();
    const updated = { ...streaks };

    if (updated[habit]?.lastCompleted === today) {
      updated[habit].lastCompleted = null;
      updated[habit].count = Math.max(updated[habit].count - 1, 0);
    } else {
      updated[habit].lastCompleted = today;
      updated[habit].count += 1;
    }

    setStreaks(updated);
  };

  // ✅ Reset streaks daily if not completed
  useEffect(() => {
    const today = new Date().toDateString();
    const updated = { ...streaks };
    Object.keys(updated).forEach((habit) => {
      if (updated[habit].lastCompleted !== today) {
        updated[habit].count = 0;
      }
    });
    setStreaks(updated);
  }, []);

  // ✅ Add goal
  const addGoal = () => {
    if (newGoal.trim() !== "") {
      setGoals([...goals, newGoal]);
      setNewGoal("");
    }
  };

  // ✅ Feature buttons
  const features = [
    {
      title: "Set Goals",
      bg: "#b79b87",
      description: "Define your personal growth targets.",
      action: () => setShowGoals(true),
    },
    {
      title: "Track Progress",
      bg: "#b89e6f",
      description: "Mark habits as complete daily.",
    },
    {
      title: "Build Streaks",
      bg: "#b89e6f",
      description: "Stay consistent with daily progress.",
    },
    {
      title: "Calendar View",
      bg: "#efe3b8",
      description: "See your progress at a glance.",
      link: "/calendar",
    },
    {
      title: "Daily Quotes",
      bg: "#b79b87",
      description: "Motivational quotes to inspire you.",
    },
    {
      title: "Personalized",
      bg: "#b89e6f",
      description: "Customize your habits for your needs.",
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

      <h1 className="text-5xl font-bold text-[#695125] text-center mb-6">HabitFlow</h1>

      <p className="max-w-2xl text-lg text-[#695125] text-center mb-10 leading-relaxed">
        Transform your life one habit at a time. Track, build, and maintain daily routines to help
        you achieve your personal development goals.
      </p>

      {/* ✅ Add Habit */}
      <button
        onClick={addHabit}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-10"
      >
        Start Building Habits
      </button>

      {/* ✅ Habit List */}
      {habits.length > 0 && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">Your Habits</h3>
          <ul className="space-y-3 text-[#695125]">
            {habits.map((h, i) => (
              <li
                key={i}
                className="bg-white rounded-full px-4 py-3 shadow flex justify-between items-center"
              >
                <span>{h}</span>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={streaks[h]?.lastCompleted === new Date().toDateString()}
                    onChange={() => toggleProgress(h)}
                    className="w-5 h-5 accent-[#b89e6f] cursor-pointer"
                  />
                  <span className="text-sm text-[#695125]">
                    🔥 {streaks[h]?.count || 0} day streak
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Feature Buttons */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full text-center justify-items-center mt-12">
        {features.map((f, i) =>
          f.link ? (
            <Link
              key={i}
              to={f.link}
              className="w-full max-w-xs h-44 p-5 rounded-3xl shadow-md text-black flex flex-col items-center justify-center hover:scale-105 transition duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-2">{f.title}</h2>
              <p className="text-sm">{f.description}</p>
            </Link>
          ) : (
            <button
              key={i}
              onClick={f.action}
              className="w-full max-w-xs h-44 p-5 rounded-3xl shadow-md text-black flex flex-col items-center justify-center hover:scale-105 transition duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-2">{f.title}</h2>
              <p className="text-sm">{f.description}</p>
            </button>
          )
        )}
      </div>

      {/* ✅ Goals Modal */}
      {showGoals && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-2xl font-bold text-[#695125] mb-4 text-center">Your Goals</h2>
            <ul className="space-y-2 mb-4">
              {goals.map((g, i) => (
                <li key={i} className="bg-[#efe6d8] px-3 py-2 rounded-lg shadow-sm">
                  {g}
                </li>
              ))}
            </ul>
            <input
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="Enter a new goal"
              className="border border-[#b79b87] px-3 py-2 w-full rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#b89e6f]"
            />
            <div className="flex justify-between">
              <button
                onClick={addGoal}
                className="bg-[#b89e6f] text-white px-4 py-2 rounded-lg hover:opacity-90"
              >
                Add Goal
              </button>
              <button
                onClick={() => setShowGoals(false)}
                className="text-[#695125] hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ How It Works Section */}
      <div
        id="how-it-works"
        className="w-full bg-[#b89e6f] text-[#fffcf0] text-center py-20 mt-20 rounded-2xl"
      >
        <Link to="/how-it-works" className="text-5xl font-[Lovelace] hover:underline transition">
          How It Works
        </Link>
      </div>
    </div>
  );
}
