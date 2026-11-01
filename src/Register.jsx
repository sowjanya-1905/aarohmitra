
import { useState } from "react";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError(false);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setMessage("Account created successfully!");
      setForm({
        businessName: "",
        ownerName: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(true);
      setMessage(
        err.message === "Failed to fetch"
          ? "Cannot connect to server. Please try again."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <a href="/" className="register-logo">
          Aaroh<span>Mitra</span>
        </a>

        <h1>Create your account</h1>
        <p className="register-subtitle">
          Start organizing your business in one place.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Business name</label>
          <input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Enter your business name"
            required
          />

          <label>Owner name</label>
          <input
            name="ownerName"
            value={form.ownerName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Email address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            minLength="8"
            value={form.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            required
          />

          <button
            type="submit"
            className="register-button"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {message && (
          <p style={{ color: error ? "red" : "green", marginTop: "15px" }}>
            {message}
          </p>
        )}

        <p className="register-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
