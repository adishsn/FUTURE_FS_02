import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function CustomerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting lead to Firestore...");

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "leads"), {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        requirement: requirement.trim(),
        status: "Pending",
        createdAt: serverTimestamp()
      });

      console.log("Lead added with ID:", docRef.id);
      alert("Lead submitted successfully!");

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setRequirement("");
    } catch (error) {
      console.error("❌ Firestore error:", error);
      alert("Failed to submit lead. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Lead</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Requirement"
          rows="4"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          required
        />

        <button className="btn secondary" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Lead"}
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
