import React, { useState, useEffect } from "react";

const quotes = [
  "Small steps every day lead to big results.",
  "Discipline is the bridge between goals and accomplishment.",
  "You don’t have to be perfect, just consistent.",
  "Habits are the compound interest of self-improvement.",
  "Your future is built by what you do today, not tomorrow.",
  "The secret of your success is found in your daily routine.",
  "Success is the sum of small efforts repeated day in and day out."
];

export default function DailyQuotes() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const savedQuote = localStorage.getItem("dailyQuote");
    if (savedQuote) {
      setQuote(savedQuote);
    } else {
      generateNewQuote();
    }
  }, []);

  const generateNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    localStorage.setItem("dailyQuote", randomQuote);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffcf0] text-[#695125] px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">Daily Motivation 🌞</h1>
      <div className="bg-[#efe6d8] rounded-xl shadow-md p-8 max-w-xl text-center">
        <p className="text-2xl italic mb-6">"{quote}"</p>
        <button
          onClick={generateNewQuote}
          className="bg-[#b89e6f] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
