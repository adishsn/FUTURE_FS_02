import { useEffect, useState } from "react";
import { collection, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function AdminDashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "leads"), (snapshot) => {
      const leadsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("LIVE LEADS:", leadsData); // 👈 DEBUG
      setLeads(leadsData);
    });

    return () => unsub();
  }, []);

  const markContacted = async (id) => {
    await updateDoc(doc(db, "leads", id), {
      status: "Contacted"
    });
  };

  const deleteLead = async (id) => {
    await deleteDoc(doc(db, "leads", id));
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard (Real-Time)</h2>

      <table className="lead-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Requirement</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No leads yet
              </td>
            </tr>
          )}

          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.requirement}</td>
              <td>{lead.status}</td>
              <td>
                <button
                  className="btn primary"
                  onClick={() => markContacted(lead.id)}
                >
                  Mark Contacted
                </button>

                <button
                  className="btn"
                  style={{ background: "#dc2626", color: "white", marginLeft: "8px" }}
                  onClick={() => deleteLead(lead.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
