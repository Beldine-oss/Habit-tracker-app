import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import CalendarView from "./pages/CalendarView";
import logo from "./assets/logo.jpg";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [completedHabits, setCompletedHabits] = useState({});
  const [showChecklist, setShowChecklist] = useState(false);

  // Load habits from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(saved);
    const savedCompleted = JSON.parse(localStorage.getItem("completedHabits")) || {};
    setCompletedHabits(savedCompleted);
  }, []);

  // Save habits and completedHabits to localStorage
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
    localStorage.setItem("completedHabits", JSON.stringify(completedHabits));
  }, [habits, completedHabits]);

  // Add new habit
  const addHabit = () => {
    const newHabit = prompt("Enter a new habit:");
    if (newHabit && newHabit.trim() !== "") {
      setHabits([...habits, newHabit]);
    }
  };

  // Handle marking habit as complete
  const toggleHabit = (habit) => {
    setCompletedHabits((prev) => ({
      ...prev,
      [habit]: !prev[habit],
    }));
  };

  const features = [
    {
      title: "Set Goals",
      bg: "#b79b87",
      desc: "Define clear and achievable goals to guide your daily habits.",
    },
    {
      title: "Track Progress",
      bg: "#b89e6f",
      desc: "Monitor your growth and check off habits you’ve completed.",
      onClick: () => setShowChecklist(true),
    },
    {
      title: "Build Streaks",
      bg: "#b89e6f",
      desc: "Stay motivated by maintaining your daily habit streaks.",
    },
    {
      title: "Calendar View",
      bg: "#efe3b8",
      desc: "View your overall progress and streaks in a calendar layout.",
      link: "/calendar",
    },
    {
      title: "Daily Quotes",
      bg: "#b79b87",
      desc: "Get inspired with motivational quotes every day.",
    },
    {
      title: "Personalized",
      bg: "#b89e6f",
      desc: "Customize your habit tracker to match your lifestyle.",
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
        Transform your life one habit at a time. Track, build and maintain daily routines to help
        you achieve your personal development goals.
      </p>

      <button
        onClick={addHabit}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-10"
      >
        Start Building Habits
      </button>

      {/* ✅ Habit list */}
      {habits.length > 0 && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">Your Habits</h3>
          <ul className="space-y-2 text-[#695125]">
            {habits.map((h, i) => (
              <li
                key={i}
                className="bg-white rounded-full px-4 py-2 shadow text-center"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Habit Checklist (Track Progress) */}
      {showChecklist && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">
            Track Your Progress
          </h3>
          {habits.length > 0 ? (
            <ul className="space-y-3 text-[#695125]">
              {habits.map((habit, i) => (
                <li key={i} className="flex items-center justify-between bg-white p-3 rounded-full shadow">
                  <span>{habit}</span>
                  <input
                    type="checkbox"
                    checked={!!completedHabits[habit]}
                    onChange={() => toggleHabit(habit)}
                    className="w-5 h-5"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-[#695125]">No habits yet. Add one to start tracking!</p>
          )}
          <button
            onClick={() => setShowChecklist(false)}
            className="mt-6 bg-[#b89e6f] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Close
          </button>
        </div>
      )}

      {/* ✅ Feature buttons */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full text-center justify-items-center mt-12">
        {features.map((f, i) =>
          f.link ? (
            <Link
              key={i}
              to={f.link}
              className="w-full max-w-xs h-48 p-5 rounded-2xl shadow-md text-black flex flex-col items-center justify-center hover:scale-105 transition duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-2">{f.title}</h2>
              <p className="text-sm">{f.desc}</p>
            </Link>
          ) : (
            <button
              key={i}
              onClick={f.onClick}
              className="w-full max-w-xs h-48 p-5 rounded-2xl shadow-md text-black flex flex-col items-center justify-center hover:scale-105 transition duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-2">{f.title}</h2>
              <p className="text-sm">{f.desc}</p>
            </button>
          )
        )}
      </div>

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
