import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../utils/auth";

function Alumni() {
  const [alumni, setAlumni] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showPopup, setShowPopup] = useState(false);
  const [newAlumni, setNewAlumni] = useState({
    name: "",
    designation: "",
    company: "",
    email: "",
    batch: "",
    department: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/alumni/")
      .then((res) => res.json())
      .then((data) => setAlumni(data))
      .catch((err) => console.error("Error fetching alumni:", err));
  }, []);

  const handleAddAlumni = (e) => {
    e.preventDefault();
    if (!isLoggedIn()) return alert("Please login to add alumni!");
    fetch("http://127.0.0.1:8000/api/alumni/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAlumni),
    })
      .then((res) => res.json())
      .then((data) => {
        setAlumni([...alumni, data]);
        setShowPopup(false);
        setNewAlumni({
          name: "",
          designation: "",
          company: "",
          email: "",
          batch: "",
          department: "",
        });
      })
      .catch((err) => console.error("Error adding alumni:", err));
  };

  const filteredAlumni = alumni.filter((alum) => {
    const matchesSearch =
      (alum.name && alum.name.toLowerCase().includes(search.toLowerCase())) ||
      (alum.designation && alum.designation.toLowerCase().includes(search.toLowerCase())) ||
      (alum.batch && alum.batch.toLowerCase().includes(search.toLowerCase())) ||
      (alum.department && alum.department.toLowerCase().includes(search.toLowerCase()));

    const matchesFilter =
      filter === "all" ||
      (alum.designation && alum.designation.toLowerCase().includes(filter.toLowerCase()));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="alumni-container" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>Our Alumni</h1>

      <div
        style={{
          margin: "20px 0",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search alumni..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="all">All</option>
          <option value="engineer">Engineers</option>
          <option value="scientist">Scientists</option>
          <option value="founder">Founders</option>
        </select>

        {isLoggedIn() && (
          <button
            onClick={() => setShowPopup(true)}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              background: "#1e3a8a",
              color: "white",
              cursor: "pointer",
            }}
          >
            + Add Alumni
          </button>
        )}
      </div>

      <div
        className="alumni-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alum) => (
            <div
              className="alumni-card"
              key={alum.id}
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
                lineHeight: "1.6",
              }}
            >
              <h3 style={{ margin: "10px 0", fontSize: "1.2rem", color: "#1e3a8a" }}>
                {alum.name}
              </h3>
              <p style={{ margin: "5px 0", fontWeight: "500", color: "#444" }}>
                {alum.designation}
              </p>
              <p style={{ margin: "5px 0", fontSize: "0.95rem", color: "#666" }}>
                {alum.company}
              </p>
              {alum.department && (
                <p style={{ margin: "5px 0", fontSize: "0.9rem", fontWeight: "500", color: "#0d9488" }}>
                  🏫 Dept: {alum.department}
                </p>
              )}
              {alum.batch && (
                <p style={{ margin: "5px 0", fontSize: "0.9rem", fontWeight: "500", color: "#16a34a" }}>
                  🎓 Batch: {alum.batch}
                </p>
              )}
              {alum.email && (
                <p
                  style={{
                    margin: "8px 0",
                    fontSize: "0.9rem",
                    color: "#1e3a8a",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={alum.email}
                >
                  📧 {alum.email}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No alumni found.</p>
        )}
      </div>

      {/* Popup Form */}
      {showPopup && isLoggedIn() && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleAddAlumni}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "350px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h2 style={{ textAlign: "center", color: "#1e3a8a" }}>Add New Alumni</h2>
            <input
              type="text"
              placeholder="Name"
              value={newAlumni.name}
              onChange={(e) => setNewAlumni({ ...newAlumni, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Designation"
              value={newAlumni.designation}
              onChange={(e) => setNewAlumni({ ...newAlumni, designation: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Company"
              value={newAlumni.company}
              onChange={(e) => setNewAlumni({ ...newAlumni, company: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={newAlumni.email}
              onChange={(e) => setNewAlumni({ ...newAlumni, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Batch"
              value={newAlumni.batch}
              onChange={(e) => setNewAlumni({ ...newAlumni, batch: e.target.value })}
            />
            <input
              type="text"
              placeholder="Department"
              value={newAlumni.department}
              onChange={(e) => setNewAlumni({ ...newAlumni, department: e.target.value })}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button type="submit" style={{ padding: "8px 15px", background: "#1e3a8a", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                style={{ padding: "8px 15px", borderRadius: "5px", border: "1px solid #ccc", cursor: "pointer" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Alumni;
