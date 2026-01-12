import "../styles/Register.css";
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className="page">

      {/* Top bar */}
      <div className="top-bar">
        <div className="logo">
          <svg viewBox="0 0 48 48">
            <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" fill="none" stroke="currentColor" strokeWidth="4"/>
            <path d="M24 22V44" stroke="currentColor" strokeWidth="4"/>
            <path d="M24 22L42 14" stroke="currentColor" strokeWidth="4"/>
            <path d="M24 22L6 14" stroke="currentColor" strokeWidth="4"/>
            <circle cx="24" cy="13" r="3"/>
          </svg>
          <h2>Voyage</h2>
        </div>
        <a href="#">Help</a>
      </div>

      {/* Card */}
      <div className="card">
        <h1>Join Voyage</h1>
        <p>Create your account to start your journey.</p>

        <form>
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="text" placeholder="Email or Username" />
          <input type="password" placeholder="Create Password" />

          <div className="row">
            <select>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input type="date" />
          </div>

          <select>
            <option>Country</option>
            <option>India</option>
            <option>USA</option>
          </select>
          <button className="submit">Submit</button>
        </form>
        <div className="footer">
          Already have an account? 
          <Link to="/"> Login</Link>
          
        </div>
      </div>

    </div>
  );
}
export default Register;
