import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../utils/auth";

function Events() {
  const [events, setEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events/")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!isLoggedIn()) return alert("Please login to add events!");
    const formData = new FormData();
    formData.append("title", newEvent.title);
    formData.append("description", newEvent.description);
    formData.append("date", newEvent.date);
    formData.append("location", newEvent.location);
    if (image) formData.append("image", image);

    fetch("http://127.0.0.1:8000/api/events/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents([...events, data]);
        setShowPopup(false);
        setNewEvent({ title: "", description: "", date: "", location: "" });
        setImage(null);
      })
      .catch((err) => console.error("Error adding event:", err));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif", background: "#f4f7ff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#1e3a8a", fontSize: "2.2rem" }}>
        Upcoming Events
      </h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        {isLoggedIn() && (
          <button
            onClick={() => setShowPopup(true)}
            style={{
              padding: "12px 28px",
              border: "none",
              borderRadius: "12px",
              background: "#1e3a8a",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            + Add Event
          </button>
        )}
      </div>

      <div
        className="events-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                transition: "0.4s",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: "100%", height: "220px", objectFit: "cover", transition: "0.3s" }}
                />
              )}
              <div style={{ padding: "25px" }}>
                <h2 style={{ color: "#1e3a8a", marginBottom: "12px", fontSize: "1.4rem" }}>{event.title}</h2>
                <p style={{ color: "#555", fontSize: "1rem", marginBottom: "15px" }}>{event.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: "#e0f2fe",
                      color: "#0369a1",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                      marginBottom: "8px",
                    }}
                  >
                    📅 {new Date(event.date).toLocaleString()}
                  </span>
                  <span
                    style={{
                      background: "#dcfce7",
                      color: "#16a34a",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                      marginBottom: "8px",
                    }}
                  >
                    📍 {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#777", fontSize: "1.1rem" }}>No events found.</p>
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
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleAddEvent}
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "15px",
              width: "420px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
            }}
          >
            <h2 style={{ textAlign: "center", color: "#1e3a8a" }}>Add New Event</h2>
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              required
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", minHeight: "80px" }}
            />
            <input
              type="datetime-local"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              required
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button type="submit" style={{ padding: "10px 20px", background: "#1e3a8a", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                style={{ padding: "10px 20px", borderRadius: "8px", border: "1px solid #ccc", cursor: "pointer" }}
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

export default Events;
