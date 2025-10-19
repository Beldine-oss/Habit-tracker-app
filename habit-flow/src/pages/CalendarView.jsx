import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

export default function CalendarView() {
  const [habits, setHabits] = useState([]);
  const [completedDates, setCompletedDates] = useState({});

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    const savedProgress = JSON.parse(localStorage.getItem("habitProgress")) || {};
    setHabits(savedHabits);
    setCompletedDates(savedProgress);
  }, []);

  const handleDayClick = (date, habitName) => {
    const dateString = date.toDateString();
    const updatedProgress = { ...completedDates };

    if (!updatedProgress[habitName]) {
      updatedProgress[habitName] = [];
    }

    if (updatedProgress[habitName].includes(dateString)) {
      updatedProgress[habitName] = updatedProgress[habitName].filter(d => d !== dateString);
    } else {
      updatedProgress[habitName].push(dateString);
    }

    setCompletedDates(updatedProgress);
    localStorage.setItem("habitProgress", JSON.stringify(updatedProgress));
  };

  const tileContent = ({ date }) => {
    const dateString = date.toDateString();
    const isCompleted = Object.values(completedDates).some(days => days.includes(dateString));
    return isCompleted ? <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-1"></div> : null;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Habit Progress Calendar</h1>

      {habits.length === 0 ? (
        <p className="text-gray-600 mb-4">No habits yet. Go back and add some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {habits.map((habit, index) => (
            <div key={index} className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-indigo-600">{habit}</h2>
              <Calendar
                onClickDay={(date) => handleDayClick(date, habit)}
                tileContent={tileContent}
              />
            </div>
          ))}
        </div>
      )}

      <Link
        to="/"
        className="mt-8 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
