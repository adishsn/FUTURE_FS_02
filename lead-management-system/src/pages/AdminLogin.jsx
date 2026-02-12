import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "adishpc2006@gmail.com"; // 👈 CHANGE TO YOUR ADMIN EMAIL

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 🔒 Only allow specific admin email
      if (userCred.user.email !== ADMIN_EMAIL) {
        alert("Access denied. Not an admin.");
        return;
      }

      alert("Admin login successful!");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid admin credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Login (Secure)</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login as Admin"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
