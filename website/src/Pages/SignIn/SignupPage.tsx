import Iridescence from "../../components/Iridescence/Iridescence";
import "./signup.css";
import Logo from "../../assets/WesternLogo.png.png";
import { Link } from "react-router";

export default function SignupPage() {
  return (
    <div className="signup-container">
      
      {/* LEFT PURPLE PANEL */}
      <div className="signup-left">
        <Iridescence />
        <img
          src={Logo}
          alt="Logo"
          className="signup-logo"
        />
          
      </div>

      {/* RIGHT WHITE PANEL */}
      <div className="signup-right">
        <div className="signup-card">
          <h2>Sign Up</h2>

          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button>Sign Up</button>

          <p className="login-text">
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
