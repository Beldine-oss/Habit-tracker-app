import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-[#695125]">HabitFlow</Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm text-[#695125] hover:underline">Home</Link>
          {isRoot ? (
            <a href="#how-it-works" className="text-sm text-[#695125] hover:underline">How it works</a>
          ) : (
            <Link to="/how-it-works" className="text-sm text-[#695125] hover:underline">How it works</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
