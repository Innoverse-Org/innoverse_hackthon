import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo1.png"

const Header = () => {
  const menuItems = ["Home", "About", "Contact", "Academics", "Enroll"]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#023047] text-white shadow-md p-2">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Logo" width={50} />
              <h1 className="text-2xl font-medium text-[#ffb703]">Muktanga</h1>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={
                  item === "Home" ? "/" : item.toLowerCase().replace(" ", "-")
                }
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fb8500] border-b-2 border-[#fb8500] transition duration-300"
                    : "hover:text-[#fb8500] transition duration-300"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#8ecae6] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden space-y-3 pb-3">
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={
                  item === "Home" ? "/" : item.toLowerCase().replace(" ", "-")
                }
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#fb8500] border-b-2 border-[#fb8500] transition duration-300"
                    : "block hover:text-[#fb8500] transition duration-300"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
