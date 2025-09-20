import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../utils/auth";

function Gallery() {
  const [images, setImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newImage, setNewImage] = useState({ title: "" });
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/gallery/")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!isLoggedIn()) return alert("Please login to add images!");
    const formData = new FormData();
    formData.append("title", newImage.title);
    if (file) formData.append("image", file);

    fetch("http://127.0.0.1:8000/api/gallery/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImages([...images, data]);
        setShowPopup(false);
        setNewImage({ title: "" });
        setFile(null);
      })
      .catch((err) => console.error("Error adding image:", err));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#1e3a8a", marginBottom: "30px" }}>
        Gallery
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {isLoggedIn() && (
          <button
            onClick={() => setShowPopup(true)}
            style={{
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              background: "#1e3a8a",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            + Add Image
          </button>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {images.length > 0 ? (
          images.map((img) => (
            <div
              key={img.id}
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              {img.image && (
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    overflow: "hidden",
                    background: "#f0f0f0",
                  }}
                >
                  <img
                    src={`${img.image}`}
                    alt={img.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      transition: "transform 0.3s",
                    }}
                  />
                </div>
              )}
              <h3 style={{ margin: "10px 0", color: "#1e3a8a" }}>{img.title}</h3>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#777" }}>No images found.</p>
        )}
      </div>

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
            onSubmit={handleAddImage}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#1e3a8a" }}>Add New Image</h2>
            <input
              type="text"
              placeholder="Title"
              value={newImage.title}
              onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
              required
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
              style={{ padding: "5px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#1e3a8a",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  color: "#1e3a8a",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
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

export default Gallery;
