import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

export default function App() {
  const [habits, setHabits] = useState(() => {
    try {
      const raw = localStorage.getItem("habits");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to parse saved habits:", e);
      return [];
    }
  });

  const [completedHabits, setCompletedHabits] = useState(() => {
    try {
      const raw = localStorage.getItem("completedHabits");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to parse completedHabits:", e);
      return [];
    }
  });

  const [streaks, setStreaks] = useState(() => {
    try {
      const raw = localStorage.getItem("streaks");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error("Failed to parse streaks:", e);
      return {};
    }
  });

  const [lastCompletionDate, setLastCompletionDate] = useState(() => {
    try {
      return localStorage.getItem("lastCompletionDate") || null;
    } catch (e) {
      console.error("Failed to read lastCompletionDate:", e);
      return null;
    }
  });

  // ✅ Save all data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
    localStorage.setItem("completedHabits", JSON.stringify(completedHabits));
    localStorage.setItem("streaks", JSON.stringify(streaks));
    localStorage.setItem("lastCompletionDate", lastCompletionDate);
  }, [habits, completedHabits, streaks, lastCompletionDate]);

  // ✅ Reset streaks daily if no completion
  useEffect(() => {
    const today = new Date().toDateString();
    if (lastCompletionDate && lastCompletionDate !== today) {
      const resetStreaks = { ...streaks };
      habits.forEach((habit) => {
        if (!completedHabits.includes(habit)) {
          resetStreaks[habit] = 0;
        }
      });
      setStreaks(resetStreaks);
      setCompletedHabits([]);
      setLastCompletionDate(today);
    }
  }, [habits]);

  // ✅ Add a new habit
  const addHabit = () => {
    const newHabit = prompt("Enter a new habit:");
    if (newHabit && newHabit.trim() !== "" && !habits.includes(newHabit)) {
      setHabits([...habits, newHabit]);
      setStreaks({ ...streaks, [newHabit]: 0 });
    }
  };

  // ✅ Export habits as JSON file
  const exportData = () => {
    const data = {
      habits,
      completedHabits,
      streaks,
      lastCompletionDate,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "habitflow-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // ✅ Import habits from JSON file
  const importInputRef = React.createRef();
  const handleImport = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (parsed.habits) setHabits(parsed.habits);
        if (parsed.completedHabits) setCompletedHabits(parsed.completedHabits);
        if (parsed.streaks) setStreaks(parsed.streaks);
        if (parsed.lastCompletionDate) setLastCompletionDate(parsed.lastCompletionDate);
        alert("Import successful");
      } catch (err) {
        alert("Failed to import: invalid JSON");
      }
    };
    reader.readAsText(file);
    e.target.value = null;
  };

  // ✅ Clear all stored habit data
  const clearData = () => {
    if (!confirm("Clear all habit data? This cannot be undone.")) return;
    setHabits([]);
    setCompletedHabits([]);
    setStreaks({});
    setLastCompletionDate(null);
    localStorage.removeItem("habits");
    localStorage.removeItem("completedHabits");
    localStorage.removeItem("streaks");
    localStorage.removeItem("lastCompletionDate");
    alert("All habit data cleared.");
  };

  // ✅ Toggle habit completion
  const toggleComplete = (habitName) => {
    const today = new Date().toDateString();
    let updatedCompleted = [...completedHabits];
    let updatedStreaks = { ...streaks };

    if (completedHabits.includes(habitName)) {
      updatedCompleted = updatedCompleted.filter((h) => h !== habitName);
      updatedStreaks[habitName] = Math.max(0, updatedStreaks[habitName] - 1);
    } else {
      updatedCompleted.push(habitName);
      updatedStreaks[habitName] = (updatedStreaks[habitName] || 0) + 1;
    }

    setCompletedHabits(updatedCompleted);
    setStreaks(updatedStreaks);
    setLastCompletionDate(today);
  };

  // ✅ New: Daily Quotes functionality
  const quotes = [
    "Small daily improvements lead to stunning results.",
    "Success is the sum of small efforts repeated daily.",
    "Discipline is choosing what you want most over what you want now.",
    "Don’t limit your challenges—challenge your limits.",
    "Consistency beats intensity every time.",
    "One day or day one. You decide.",
    "Habits are the compound interest of self-improvement.",
  ];

  const showRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    alert(`💡 Daily Quote:\n\n"${random}"`);
  };

  // ✅ Feature buttons
  const features = [
    {
      title: "Set Goals",
      desc: "Define your personal goals and create habits to reach them.",
      bg: "#b79b87",
      action: addHabit,
    },
    {
      title: "Track Progress",
      desc: "Mark your daily habits as complete.",
      bg: "#b89e6f",
      action: null,
    },
    {
      title: "Build Streaks",
      desc: "Stay motivated by maintaining daily streaks.",
      bg: "#b89e6f",
    },
    {
      title: "Calendar View",
      desc: "See your progress across days.",
      bg: "#efe3b8",
      link: "/calendar",
    },
    {
      title: "Daily Quotes",
      desc: "Get inspired every day with motivational quotes.",
      bg: "#b79b87",
      action: showRandomQuote, // ✅ Added here
    },
    {
      title: "Personalized",
      desc: "Organize habits by categories that matter to you.",
      bg: "#b89e6f",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf0] flex flex-col items-center justify-center px-6 py-12">
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
        Transform your life one habit at a time. Track, build and maintain daily
        routines to help you achieve your personal development goals.
      </p>

      <button
        onClick={addHabit}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-10"
      >
        Start Building Habits
      </button>

      {habits.length > 0 && (
        <div className="bg-[#efe6d8] p-6 rounded-xl shadow-md w-full max-w-md mb-12">
          <h3 className="text-2xl font-bold text-[#695125] mb-4 text-center">
            Your Habits
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
                  {h} — Streak: {streaks[h] || 0}🔥
                </span>
                <input
                  type="checkbox"
                  checked={completedHabits.includes(h)}
                  onChange={() => toggleComplete(h)}
                  className="w-5 h-5 accent-[#b89e6f]"
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3 mt-4">
        <button
          onClick={exportData}
          className="bg-[#695125] text-white px-4 py-2 rounded-full hover:opacity-90 transition"
        >
          Export Data
        </button>

        <label className="bg-[#695125] text-white px-4 py-2 rounded-full cursor-pointer hover:opacity-90 transition">
          Import Data
          <input
            type="file"
            accept="application/json"
            onChange={handleImport}
            ref={importInputRef}
            className="hidden"
          />
        </label>

        <button
          onClick={clearData}
          className="bg-gray-300 text-[#695125] px-4 py-2 rounded-full hover:bg-gray-400 transition"
        >
          Clear Data
        </button>
      </div>

      {/* ✅ Feature Buttons Grid */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full text-center justify-items-center mt-12">
        {features.map((f, i) =>
          f.link ? (
            <Link
              key={i}
              to={f.link}
              className="w-full max-w-xs h-40 p-5 rounded-full shadow-md transition text-black flex flex-col items-center justify-center mx-auto hover:scale-105 duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-1">{f.title}</h2>
              <p className="text-sm">{f.desc}</p>
            </Link>
          ) : (
            <button
              key={i}
              onClick={f.action}
              className="w-full max-w-xs h-40 p-5 rounded-full shadow-md transition text-black flex flex-col items-center justify-center mx-auto hover:scale-105 duration-200"
              style={{ backgroundColor: f.bg }}
            >
              <h2 className="text-xl font-bold mb-1">{f.title}</h2>
              <p className="text-sm">{f.desc}</p>
            </button>
          )
        )}
      </div>

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
