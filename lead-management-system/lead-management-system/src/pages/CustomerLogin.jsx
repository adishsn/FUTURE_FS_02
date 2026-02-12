import { useNavigate } from "react-router-dom";

function CustomerLogin() {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/customer-form");
  };

  return (
    <div className="form-container">
      <h2>Customer Access</h2>
      <form onSubmit={handleContinue}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <button className="btn secondary" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default CustomerLogin;
