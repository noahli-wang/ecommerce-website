import "./login.css";
import { Link } from "react-router";
import Logo from "../../assets/WesternLogo.png.png";


export default function LoginPage() {
  return (
    <div className="page">

      {/* Purple background */}
      <div className="purple-panel" >
        <img
          src={Logo}
          alt="Logo"
          className="login-logo"
        />
      </div>


      {/* White card container */}
      <div className="white-panel">
        <div className="login-card">
          <h2>Login</h2>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>

          <p className="signup-text">
            New user? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
