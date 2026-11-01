
import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [activePage, setActivePage] = useState("Overview");

  const [ordersList, setOrdersList] = useState([
    {
      id: "AM-1001",
      customer: "Rohan Stores",
      product: "T-shirts",
      quantity: 50,
      amount: 5000,
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: "AM-1002",
      customer: "Meera Traders",
      product: "Mugs",
      quantity: 35,
      amount: 3500,
      payment: "Pending",
      status: "Processing",
    },
    {
      id: "AM-1003",
      customer: "Sri Distributors",
      product: "Bottles",
      quantity: 40,
      amount: 4000,
      payment: "Pending",
      status: "Confirmed",
    },
    {
      id: "AM-1004",
      customer: "Lakshmi Mart",
      product: "Notebooks",
      quantity: 22,
      amount: 2200,
      payment: "Paid",
      status: "Processing",
    },
  ]);

  const [showOrderForm, setShowOrderForm] = useState(false);

  const [newOrder, setNewOrder] = useState({
    customer: "",
    product: "",
    quantity: "1",
    amount: "",
  });

  const menuItems = [
    "Overview",
    "Orders",
    "Inventory",
    "Payments",
    "Customers",
  ];

  const stats = [
    {
      label: "Total Orders",
      value: ordersList.length,
      note: "All recorded orders",
      icon: "▤",
    },
    {
      label: "Inventory Items",
      value: "320",
      note: "Products in stock",
      icon: "▦",
    },
    {
      label: "Pending Payments",
      value:
        "₹" +
        ordersList
          .filter((order) => order.payment === "Pending")
          .reduce((total, order) => total + order.amount, 0)
          .toLocaleString("en-IN"),
      note: "Awaiting payment",
      icon: "₹",
    },
    {
      label: "Total Customers",
      value: new Set(ordersList.map((order) => order.customer)).size,
      note: "Customers in orders",
      icon: "♙",
    },
  ];

  const handleAddOrder = (e) => {
    e.preventDefault();

    const order = {
      id: `AM-${1001 + ordersList.length}`,
      customer: newOrder.customer.trim(),
      product: newOrder.product.trim(),
      quantity: Number(newOrder.quantity),
      amount: Number(newOrder.amount),
      payment: "Pending",
      status: "Confirmed",
    };

    setOrdersList((previousOrders) => [...previousOrders, order]);

    setNewOrder({
      customer: "",
      product: "",
      quantity: "1",
      amount: "",
    });

    setShowOrderForm(false);
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <a href="/" className="dashboard-logo">
          Aaroh<span>Mitra</span>
        </a>

        <p className="sidebar-label">WORKSPACE</p>

        {menuItems.map((item, index) => (
          <button
            key={item}
            className={`sidebar-link ${
              activePage === item ? "active" : ""
            }`}
            onClick={() => {
              setActivePage(item);
              setShowOrderForm(false);
            }}
          >
            <span>{["▦", "▤", "▥", "₹", "♙"][index]}</span>
            {item}
          </button>
        ))}

        <div className="sidebar-bottom">
          <div className="business-avatar">AM</div>
          <div>
            <strong>My Business</strong>
            <small>Business workspace</small>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-greeting">BUSINESS WORKSPACE</p>
            <h1>{activePage}</h1>
          </div>
          <div className="profile-badge">AM</div>
        </header>

        {activePage === "Overview" ? (
          <>
            <div className="welcome-panel">
              <div>
                <h2>Welcome to AarohMitra 👋</h2>
                <p>
                  Your business operations, organized in one place.
                </p>
              </div>

              <button onClick={() => setActivePage("Orders")}>
                View Orders →
              </button>
            </div>

            <section className="dashboard-stats">
              {stats.map((stat) => (
                <article className="dashboard-stat" key={stat.label}>
                  <div className="stat-top">
                    <span>{stat.label}</span>
                    <span className="dashboard-stat-icon">
                      {stat.icon}
                    </span>
                  </div>

                  <h2>{stat.value}</h2>
                  <p>{stat.note}</p>
                </article>
              ))}
            </section>

            <section className="dashboard-table-card">
              <div className="table-title">
                <div>
                  <h2>Recent Orders</h2>
                  <p>Latest customer orders</p>
                </div>

                <button onClick={() => setActivePage("Orders")}>
                  View all
                </button>
              </div>

              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Amount</th>
                      <th>Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {ordersList.slice(-5).reverse().map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.product}</td>
                        <td>
                          ₹{order.amount.toLocaleString("en-IN")}
                        </td>
                        <td>
                          <span
                            className={`status-pill ${order.payment.toLowerCase()}`}
                          >
                            {order.payment}
                          </span>
                        </td>
                        <td>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : activePage === "Orders" ? (
          <section className="dashboard-table-card">
            <div className="table-title">
              <div>
                <h2>All Orders</h2>
                <p>Create and manage customer orders.</p>
              </div>

              <button
                onClick={() => setShowOrderForm(!showOrderForm)}
              >
                {showOrderForm ? "Cancel" : "+ New Order"}
              </button>
            </div>

            {showOrderForm && (
              <form
                className="new-order-form"
                onSubmit={handleAddOrder}
              >
                <label>
                  Customer name
                  <input
                    type="text"
                    value={newOrder.customer}
                    onChange={(e) =>
                      setNewOrder({
                        ...newOrder,
                        customer: e.target.value,
                      })
                    }
                    placeholder="Enter customer name"
                    required
                  />
                </label>

                <label>
                  Product
                  <input
                    type="text"
                    value={newOrder.product}
                    onChange={(e) =>
                      setNewOrder({
                        ...newOrder,
                        product: e.target.value,
                      })
                    }
                    placeholder="Enter product name"
                    required
                  />
                </label>

                <label>
                  Quantity
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={newOrder.quantity}
                    onChange={(e) =>
                      setNewOrder({
                        ...newOrder,
                        quantity: e.target.value,
                      })
                    }
                    required
                  />
                </label>

                <label>
                  Total amount (₹)
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={newOrder.amount}
                    onChange={(e) =>
                      setNewOrder({
                        ...newOrder,
                        amount: e.target.value,
                      })
                    }
                    placeholder="Enter total amount"
                    required
                  />
                </label>

                <button type="submit">Save Order</button>
              </form>
            )}

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {ordersList.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.product}</td>
                      <td>{order.quantity}</td>
                      <td>
                        ₹{order.amount.toLocaleString("en-IN")}
                      </td>
                      <td>
                        <span
                          className={`status-pill ${order.payment.toLowerCase()}`}
                        >
                          {order.payment}
                        </span>
                      </td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <section className="dashboard-table-card section-placeholder">
            <h2>{activePage} Management</h2>

            <p>
              This section is ready for development. We will add
              functional {activePage.toLowerCase()} management next.
            </p>

            <button onClick={() => setActivePage("Overview")}>
              ← Back to Overview
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
