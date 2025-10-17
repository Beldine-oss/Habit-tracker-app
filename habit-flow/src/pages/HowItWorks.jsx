import { Link } from "react-router-dom";
// import HabitFlowImage from "../assets/habitflow-image.png"; // Add your image later

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 py-6 bg-[#b89e6f]">
      {/* Top Section */}
      <div className="w-full max-w-6xl flex flex-col items-center mb-12">
        <h1 className="text-6xl font-[Lovelace] text-[#fffcf0] text-center mb-4">
          How It Works
        </h1>

        <p className="text-[#fffcf0] text-xl text-center max-w-2xl leading-relaxed mb-10">
          HabitFlow helps you turn small daily actions into long-term success. 
          Create habits, track progress, and stay consistent with built-in motivation tools.
        </p>

        {/* Three Buttons Row */}
        <div className="flex flex-row flex-nowrap gap-6 justify-center w-full max-w-6xl mb-12">
          <button className="bg-[#fffcf0] text-[#695125] h-[30vh] w-[30%] min-w-[200px] rounded-lg shadow-md hover:bg-[#efe6d8] transition flex flex-col justify-center items-center p-6">
            <span className="font-bold text-3xl mb-3 text-center">Create Your Habits</span>
            <span className="text-xl text-center">Set up habits in categories like Health, Learning, or Mindfulness.</span>
          </button>

          <button className="bg-[#fffcf0] text-[#695125] h-[30vh] w-[30%] min-w-[200px] rounded-lg shadow-md hover:bg-[#efe6d8] transition flex flex-col justify-center items-center p-6">
            <span className="font-bold text-3xl mb-3 text-center">Track Daily</span>
            <span className="text-xl text-center">Simple one-tap completion with optional notes and reflections.</span>
          </button>

          <button className="bg-[#fffcf0] text-[#695125] h-[30vh] w-[30%] min-w-[200px] rounded-lg shadow-md hover:bg-[#efe6d8] transition flex flex-col justify-center items-center p-6">
            <span className="font-bold text-3xl mb-3 text-center">Build Momentum</span>
            <span className="text-xl text-center">Watch your streaks grow and celebrate your progress.</span>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#efe3b8] max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 p-8 rounded-lg">
        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left text-[#695125]">
          <h2 className="text-5xl font-[Lovelace] mb-4">Get In Touch</h2>
          <p className="text-xl mb-2">Email: support@habitflow.com</p>
          <p className="text-xl mb-2">Phone: +123 456 7890</p>
          <p className="text-xl">Address: 123 HabitFlow Street, Nairobi</p>
        </div>

        {/* Image placeholder (add later) */}
        {/* <div className="flex-1 flex justify-center md:justify-end">
          <img src={HabitFlowImage} alt="HabitFlow illustration" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div> */}
      </div>

      {/* Back to Home */}
      <Link
        to="/"
        className="mt-12 mb-6 bg-[#fffcf0] text-[#695125] px-8 py-3 rounded-full font-medium hover:bg-[#efe6d8] transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
