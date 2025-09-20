import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://wallpaperaccess.com/full/187161.jpg') center/cover no-repeat",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Welcome Alumni!
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Stay connected with your alma mater and fellow alumni.
        </p>
      </section>

      {/* About Section with Paragraphs */}
      <section
        style={{
          padding: "40px 20px",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          About Our Alumni Association
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 15px auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#444",
          }}
        >
          Our Alumni Association is a vibrant community of graduates who
          continue to support, inspire, and uplift one another. We aim to
          strengthen the bond between alumni, students, and the institution by
          creating opportunities for networking, mentorship, and collaboration.
        </p>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#444",
          }}
        >
          From organizing reunions to providing career guidance, our alumni play
          a vital role in shaping the future of our students. Join us in
          upcoming events, share your journey, and inspire the next generation.
        </p>
      </section>

      {/* Info Boxes */}
      <section
        style={{
          backgroundColor: "#f0f2f5",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Upcoming Events</h2>
          <p>Check out reunions, tech talks, and celebrations.</p>
          <Link to="/events">
            <button
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              View Events
            </button>
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Alumni Network</h2>
          <p>Meet and connect with alumni worldwide.</p>
          <Link to="/alumni">
            <button
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              View Alumni
            </button>
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Gallery</h2>
          <p>Relive moments with photos & memories.</p>
          <Link to="/gallery">
            <button
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "#ff5722",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              View Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Alumni */}
      <section
        style={{
          backgroundColor: "#e6f2ff",
          padding: "40px 20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Featured Alumni
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "white",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="alumni1"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>Santhosh Kumar</h3>
            <p>Software Engineer @ Google</p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "white",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="alumni2"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>Naveen Prasath</h3>
            <p>Data Scientist @ Microsoft</p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "white",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt="alumni3"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>Harish</h3>
            <p>Founder @ Startup Hub</p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/alumni">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#6c63ff",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              View All Alumni
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
