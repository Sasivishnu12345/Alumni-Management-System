import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT token
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#1e3a8a", color: "white" }}>
      <h2>Alumni Management</h2>
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/events" style={{ color: "white" }}>Events</Link>
        <Link to="/alumni" style={{ color: "white" }}>Alumni</Link>
        <Link to="/gallery" style={{ color: "white" }}>Gallery</Link>

        {/* Show login or logout based on user */}
        {isLoggedIn() ? (
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ color: "white" }}>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
