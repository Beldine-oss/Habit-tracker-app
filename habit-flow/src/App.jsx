import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import CalendarView from "./pages/CalendarView";
import logo from "./assets/logo.jpg";

export default function App() {
  const [habits, setHabits] = useState([]);

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(saved);
  }, []);

  // ✅ Save to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // ✅ Check daily reset
  useEffect(() => {
    const today = new Date().toDateString();
    const lastReset = localStorage.getItem("lastResetDate");

    if (lastReset !== today) {
      const updated = habits.map((h) => ({
        ...h,
        completedToday: false,
        streak: h.completedToday ? h.streak : 0,
      }));
      setHabits(updated);
      localStorage.setItem("lastResetDate", today);
    }
  }, [habits]);

  // ✅ Add a new habit
  const addHabit = () => {
    const newHabit = prompt("Enter a new habit:");
    if (newHabit && newHabit.trim() !== "") {
      const habitObj = {
        name: newHabit.trim(),
        streak: 0,
        completedToday: false,
      };
      setHabits([...habits, habitObj]);
    }
  };

  // ✅ Toggle completion (marks done & updates streak)
  const toggleComplete = (index) => {
    const updated = [...habits];
    const habit = updated[index];
    if (!habit.completedToday) {
      habit.completedToday = true;
      habit.streak += 1;
    } else {
      habit.completedToday = false;
      habit.streak = habit.streak > 0 ? habit.streak - 1 : 0;
    }
    setHabits(updated);
  };

  const features = [
    {
      title: "Set Goals",
      desc: "Create personalized habits across different categories.",
      bg: "#b79b87",
    },
    {
      title: "Track Progress",
      desc: "Mark your daily habits as complete with one click.",
      bg: "#b89e6f",
    },
    {
      title: "Build Streaks",
      desc: "Stay motivated by maintaining daily habit streaks.",
      bg: "#b89e6f",
    },
    {
      title: "Calendar View",
      desc: "See your progress visually on a calendar.",
      bg: "#efe3b8",
      link: "/calendar",
    },
    {
      title: "Daily Quotes",
      desc: "Get inspired with motivational daily quotes.",
      bg: "#b79b87",
    },
    {
      title: "Personalized",
      desc: "Organize habits by what matters to you.",
      bg: "#b89e6f",
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

      <h1 className="text-5xl font-bold text-[#695125] text-center mb-6">
        HabitFlow
      </h1>

      <p className="max-w-2xl text-lg text-[#695125] text-center mb-10 leading-relaxed">
        Transform your life one habit at a time. Track, build, and maintain daily routines to help
        you achieve your personal development goals.
      </p>

      {/* ✅ Add Habit Button */}
      <button
        onClick={addHabit}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-10"
      >
        Start Building Habits
      </button>

      {/* ✅ Habit List with Streaks */}
      {habits.length > 0 && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">
            Your Habits
          </h3>
          <ul className="space-y-3 text-[#695125]">
            {habits.map((habit, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-white rounded-full px-4 py-2 shadow"
              >
                <div className="flex flex-col">
                  <span
                    className={`${
                      habit.completedToday ? "line-through text-green-600" : ""
                    } text-lg`}
                  >
                    {habit.name}
                  </span>
                  <span className="text-sm text-[#b89e6f]">
                    🔥 {habit.streak}-day streak
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={habit.completedToday}
                  onChange={() => toggleComplete(i)}
                  className="w-5 h-5 accent-[#b89e6f]"
                />
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
              className="w-full max-w-xs h-40 p-5 rounded-full shadow-md text-black flex flex-col items-center justify-center hover:scale-105 transition duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-1">{f.title}</h2>
              <p className="text-sm">{f.desc}</p>
            </Link>
          ) : (
            <button
              key={i}
              className="w-full max-w-xs h-40 p-5 rounded-full shadow-md text-black flex flex-col items-center justify-center hover:scale-105 transition duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-1">{f.title}</h2>
              <p className="text-sm">{f.desc}</p>
            </button>
          )
        )}
      </div>

      {/* ✅ How it works */}
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
