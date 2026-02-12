import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>Admin Portal</h2>
        <p>Manage all customer leads securely.</p>
        <button className="btn primary" onClick={() => navigate("/admin-login")}>
          Admin Login
        </button>
      </div>

      <div className="card">
        <h2>Customer Portal</h2>
        <p>Submit your requirements easily.</p>
        <button
          className="btn secondary"
          onClick={() => navigate("/customer-login")}
        >
          Customer Access
        </button>
      </div>
    </div>
  );
}

export default Home;
