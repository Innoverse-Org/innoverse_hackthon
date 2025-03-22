import React, { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const menuItems = ["Home", "About", "Contact", "Academics", "Enroll now"]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#1a303f] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="" alt="" />
              <h1 className="text-2xl font-bold">SCHOOL OF AKATSUKI</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={
                  item === "Home" ? "/" : item.toLowerCase().replace(" ", "-")
                }
                className="hover:text-secondary transition duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
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
              <Link
                key={item}
                to={
                  item === "Home" ? "/" : item.toLowerCase().replace(" ", "-")
                }
                className="block hover:text-secondary transition duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
