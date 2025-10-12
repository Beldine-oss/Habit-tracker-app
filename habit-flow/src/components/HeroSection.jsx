import React from "react";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen text-center px-6"
      style={{ backgroundColor: "#fffcf0", fontFamily: "'Poppins', sans-serif" }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: "#695125" }}>
        HabitFlow
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
        Transform your life one habit at a time. Track, build and maintain
        daily routines to help you achieve your personal development goals.
      </p>

      <button
        className="px-8 py-3 text-white text-lg font-medium rounded-full shadow-md hover:scale-105 transition duration-300"
        style={{ backgroundColor: "#695125" }}
      >
        Start Building Habits
      </button>
    </section>
  );
};

export default HeroSection;
