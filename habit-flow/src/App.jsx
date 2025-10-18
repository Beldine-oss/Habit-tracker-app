import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg"; // ✅ Import logo image

function Home() {
  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
      {/* ✅ Logo Section */}
      <img
        src={logo}
        alt="HabitFlow Logo"
        className="w-16 h-16 object-contain mb-4"
      />

      <h1 className="text-5xl font-bold text-[#695125] text-center mb-6">HabitFlow</h1>

      <p className="max-w-2xl text-lg text-[#695125] text-center mb-10 leading-relaxed">
        Transform your life one habit at a time. Track, build and maintain daily routines
        to help you achieve your personal development goals.
      </p>

      <button
        onClick={scrollToHowItWorks}
        className="bg-[#b89e6f] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:opacity-90 transition mb-16"
      >
        Start Building Habits
      </button>

      {/* Link to How It Works Page */}
      <Link
        to="/how-it-works"
        className="inline-block bg-transparent border border-[#695125] text-[#695125] px-6 py-2 rounded-full font-medium hover:bg-[#efe6d8] transition mb-8"
      >
        View full How It Works page
      </Link>

      {/* Feature Buttons */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full text-center justify-items-center">
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

      {/* How It Works Section */}
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
