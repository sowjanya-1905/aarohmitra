import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  if (window.location.pathname === "/login") {
  return <Login />;
}

if (window.location.pathname === "/register") {
  return <Register />;
}
  if (window.location.pathname === "/register") {
  return <Register />;
}
if (window.location.pathname === "/dashboard") {
  return <Dashboard />;
}
  return (
    <div className="website">
      <nav className="navbar">
        <a href="#" className="logo">
          Aaroh<span>Mitra</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
  href="/register"
  className="login-link"
  onClick={() => setMenuOpen(false)}
>
  Get Started
</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="about">
          <div className="hero-content">
            <span className="eyebrow">BUSINESS MANAGEMENT, SIMPLIFIED</span>
            <h1>Help your business <span>rise and grow.</span></h1>
            <p>
              Manage orders, inventory, payments, and customer relationships
              in one simple workspace built for small businesses.
            </p>
            <div className="hero-actions">
              <a href="/register" className="primary-btn">
  Explore Dashboard →
</a>
              <a href="#features" className="secondary-btn">Discover Features</a>
            </div>
            <div className="trust-note">One workspace. Better organized business.</div>
          </div>

          <div className="hero-visual">
            <div className="visual-heading">
              <span>Business overview</span>
              <span className="live-dot">● Demo</span>
            </div>
            <div className="stat-grid">
              <div className="stat-card">
                <small>Total orders</small>
                <strong>128</strong>
                <span>Order tracking</span>
              </div>
              <div className="stat-card">
                <small>Inventory items</small>
                <strong>320</strong>
                <span>Stock visibility</span>
              </div>
              <div className="stat-card">
                <small>Payments</small>
                <strong>₹45,200</strong>
                <span>Sample order value</span>
              </div>
              <div className="stat-card">
                <small>Customers</small>
                <strong>86</strong>
                <span>Customer records</span>
              </div>
            </div>
            <div className="order-preview">
              <div className="order-heading">
                <strong>Recent orders</strong>
                <span>View sample</span>
              </div>
              <div className="order-row">
                <span>Rohan Stores · T-shirts</span>
                <b className="delivered">Delivered</b>
              </div>
              <div className="order-row">
                <span>Meera Traders · Mugs</span>
                <b className="processing">Processing</b>
              </div>
              <div className="order-row">
                <span>Sri Distributors · Bottles</span>
                <b className="pending">Pending</b>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="eyebrow">ONE CONNECTED PLATFORM</span>
            <h2>Everything your business needs.</h2>
            <p>Bring scattered business activities into one organized workflow.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon blue">▤</div>
              <h3>Order Management</h3>
              <p>Create orders, record quantities, and follow each order from confirmation to delivery.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon purple">▦</div>
              <h3>Inventory Tracking</h3>
              <p>View available stock and identify products that need replenishment.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon green">₹</div>
              <h3>Payment Tracking</h3>
              <p>Keep paid and pending amounts organized for easier follow-ups.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon orange">♙</div>
              <h3>Customer History</h3>
              <p>Keep customer details and previous orders together in one place.</p>
            </article>
          </div>
        </section>

        <section className="workflow-section">
          <div className="section-heading">
            <span className="eyebrow">A SIMPLE WORKFLOW</span>
            <h2>From customer message to delivery.</h2>
          </div>
          <div className="workflow">
            {["Customer message", "Order creation", "Inventory check", "Payment tracking", "Fulfillment"].map((step, index) => (
              <div className="workflow-step" key={step}>
                <div className="step-number">{index + 1}</div>
                <span>{step}</span>
                {index < 4 && <span className="step-arrow">→</span>}
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section" id="dashboard">
          <span className="eyebrow">START WITH A CLEARER VIEW</span>
          <h2>Your business, better organized.</h2>
          <p>This preview uses sample data. Interactive order management and account features will be built next.</p>
          <button
  className="primary-btn"
  onClick={() => (window.location.href = "/register")}
>
  Continue to Dashboard →
</button>
        </section>
      </main>

      <footer id="contact">
        <a href="#" className="logo">Aaroh<span>Mitra</span></a>
        <p>A companion that helps your business rise.</p>
        <small>© 2026 AarohMitra · Prototype preview</small>
      </footer>
    </div>
  );
}

export default App;
