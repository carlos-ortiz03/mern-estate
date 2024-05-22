import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-emerald-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-emerald-500">Carlos</span>
          <span className="text-emerald-700">Estate</span>
        </h1>
        <form
          action=""
          className="bg-emerald-50 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-emerald-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-green-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-green-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-green-700 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}