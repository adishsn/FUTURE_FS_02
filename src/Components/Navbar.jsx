import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Lead Management System</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin-login">Admin</Link>
        <Link to="/customer-login">Customer</Link>
      </div>
    </div>
  );
}

export default Navbar;
