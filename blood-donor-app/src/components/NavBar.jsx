import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// NavigationItem Component to handle both Link and HashLink
const NavigationItem = ({
  label,
  to,
  isHashLink,
  onClick,
  showIcon,
  subtext,
  applyHoverEffect,
}) => {
  const LinkComponent = isHashLink ? HashLink : Link;

  return (
    <div className="relative">
      <LinkComponent
        smooth={isHashLink} // Only apply smooth scrolling for HashLink
        to={to}
        className={`text-gray-700 ${applyHoverEffect ? "hover:text-red-500" : ""} font-medium`}
        onClick={onClick}
      >
        {label}
      </LinkComponent>
      {/* Optional subtext below the link */}
      {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
      {/* Optional icon */}
      {showIcon && <span className="ml-2">{/* Add icon here */}</span>}
    </div>
  );
};

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage on component mount
    const organization = localStorage.getItem("organization");
    setIsLoggedIn(!!organization);
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("organization");

    // Update state and navigate to home screen
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleAlertClick = () => {
    if (isLoggedIn) {
      navigate("/sendsms");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-red-500">
          <a href="/">Blood Donor</a>
        </div>

        {/* Center Links */}
        <div className="flex gap-4 space-x-8">
          {/* Navigation items with HashLink for smooth scrolling */}
          <NavigationItem
            label="Why Donation?"
            to="#WhyBlood"
            isHashLink={true} // Enabling HashLink for smooth scroll
            applyHoverEffect={true}
          />
          <NavigationItem
            label="Impact"
            to="#Impact"
            isHashLink={true} // Enabling HashLink for smooth scroll
            applyHoverEffect={true}
          />
          <NavigationItem
            label="Footer"
            to="#Footer"
            isHashLink={true} // Enabling HashLink for smooth scroll
            applyHoverEffect={true}
          />
        </div>

        {/* Right Side: Dynamic Button */}
        <div className="flex items-center space-x-4">
          {/* Alert Button */}
          <button
            onClick={handleAlertClick}
            className="bg-yellow-500 text-white text-lg px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600"
          >
            {isLoggedIn ? "Send SMS" : "Login to Send SMS"}
          </button>

          {/* Logout or Get Started Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-gray-600 text-white text-lg px-6 py-2 rounded-lg shadow-md hover:bg-gray-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-500 text-white text-lg px-6 py-2 rounded-lg shadow-md hover:bg-red-600"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
