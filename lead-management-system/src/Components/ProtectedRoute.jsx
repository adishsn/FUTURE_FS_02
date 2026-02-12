import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ADMIN_EMAIL = "adishpc2006@gmail.com"; // SAME ADMIN EMAIL

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Checking admin...</p>;

  if (!user || user.email !== ADMIN_EMAIL) {
    return <Navigate to="/admin-login" />;
  }

  return children;
}

export default ProtectedRoute;
