import "../styles/Login.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT SECTION */}
        <div className="left-section">
          <h2 className="brand">Voyage</h2>

          <div className="hero-text">
            <h1>
              Collaborate.<br />
              Share.<br />
              Learn.
            </h1>
            <p>
              Join the premier academic community connecting students,
              researchers, and professionals worldwide.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">

          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Please enter your details to access your dashboard.</p>

            <form className="login-form">

              <label>Email Address</label>
              <input
                type="email"
                placeholder="student@university.edu"
              />

              <div className="password-row">
                <label>Password</label>
                <a href="#">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
              />

              <button className="login-btn">
                Log In →
              </button>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="social-buttons">
                <button>Google</button>
                <button>Facebook</button>
              </div>

              <p className="signup-text">
                New to Voyage?
                <Link to="/register"> Create an account</Link>
              </p>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;
