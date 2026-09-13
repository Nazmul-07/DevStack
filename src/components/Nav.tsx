import { FaBars } from "react-icons/fa";
import logo from "../assets/logo-text.png";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      {/* For Mobile */}
      <nav className="md:hidden container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl cursor-pointer"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        <img src={logo} alt="DevStack logo" className="w-28 ml-20" />

        <div>
          <button className="px-2 py-1.5 text-sm cursor-pointer">Sign In</button>
          <button className="bg-pink-500 rounded-full px-3 py-1.5 text-sm text-white cursor-pointer hover:bg-pink-400">
            Sign Up
          </button>
        </div>
      </nav>

      {/* For mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="flex flex-col items-center gap-5 py-5 font-medium">
            <li className="text-pink-500">
              <a href="">Home</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">Technologies</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">Projects</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">About</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}

      {/*For DeskTop and Tab*/}
      <nav className="hidden md:flex items-center justify-between container mx-auto px-6 lg:px-8 py-4">
        <div>
          <img src={logo} alt="DevStack logo" className="w-32" />
        </div>

        <div>
          <ul className="flex gap-5 lg:gap-7 font-medium">
            <li className="text-pink-500">
              <a href="">Home</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">Technologies</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">Projects</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">About</a>
            </li>

            <li className="hover:text-pink-500 transition">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 font-semibold">
          <button className="cursor-pointer">Sign In</button>

          <button className="bg-pink-500 rounded-full px-4 py-1.5 text-white cursor-pointer hover:bg-pink-400">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
