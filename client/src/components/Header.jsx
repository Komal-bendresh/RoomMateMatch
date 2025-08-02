import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-3">
        <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
        <span className="text-xl font-bold text-gray-800">RoomMate Match</span>
      </div>

      <nav className="space-x-6">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/signup" className={linkClass}>Sign Up</NavLink>
        <NavLink to="/login" className={linkClass}>Login</NavLink>
        <NavLink to="/survay" className={linkClass}>Survey</NavLink>
        <NavLink to="/result" className={linkClass}>Result</NavLink>
        <NavLink to="/playground" className={linkClass}>AI Playground</NavLink>
        <NavLink to="/chat" className={linkClass}>ChatRoom</NavLink>
      </nav>
    </header>
  );
};

export default Header;
