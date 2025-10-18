import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TrackProgress() {
  const location = useLocation();
  const navigate = useNavigate();

  // Receive habits from Home.jsx
  const userHabits = location.state?.habits || [];

  // Track completed habits locally
  const [completedHabits, setCompletedHabits] = useState([]);

  const toggleComplete = (habitName) => {
    setCompletedHabits((prev) =>
      prev.includes(habitName)
        ? prev.filter((h) => h !== habitName)
        : [...prev, habitName]
    );
  };

  if (userHabits.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-[#fffcf0]">
        <h1 className="text-4xl font-bold text-[#695125] mb-6">
          No Habits to Track
        </h1>
        <p className="text-[#695125] text-lg mb-6">
          Please add some habits first from the Home page.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#b89e6f] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-[#fffcf0]">
      <h1 className="text-4xl font-bold text-[#695125] mb-6">
        Track Your Habits
      </h1>

      <ul className="w-full max-w-md space-y-3 mb-8">
        {userHabits.map((habit, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white rounded-full px-4 py-2 shadow"
          >
            <span
              className={`${
                completedHabits.includes(habit)
                  ? "line-through text-green-600"
                  : "text-[#695125]"
              } text-lg`}
            >
              {habit}
            </span>
            <input
              type="checkbox"
              checked={completedHabits.includes(habit)}
              onChange={() => toggleComplete(habit)}
              className="w-5 h-5 accent-[#b89e6f]"
            />
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/")}
        className="bg-gray-300 text-[#695125] px-8 py-3 rounded-full hover:bg-gray-400 transition"
      >
        Back Home
      </button>
    </div>
  );
}
