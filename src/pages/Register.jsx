import "../styles/Register.css";
import { Link } from "react-router-dom";
import { register } from "../endpoints/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
  e.preventDefault();

  // Password validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long and include:\n" +
      "- One uppercase letter\n" +
      "- One lowercase letter\n" +
      "- One number\n" +
      "- One special character (!@#$%^&*)"
    );
    return;
  }

  if (password !== confirmpassword) {
    alert("Password and confirm password do not match.");
    return;
  }

  try {
    await register(username, email, country, dob, gender, password);
    navigate("/login");
  } catch (error) {
    console.error(error.response?.data || error);
    alert("Error registering. Please try again.");
  }
};



  return (
    <div className="page">

      {/* Top bar */}
      <div className="top-bar">
        <div className="logo">
          <svg viewBox="0 0 48 48">
            <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M24 22V44" stroke="currentColor" strokeWidth="4" />
            <path d="M24 22L42 14" stroke="currentColor" strokeWidth="4" />
            <path d="M24 22L6 14" stroke="currentColor" strokeWidth="4" />
            <circle cx="24" cy="13" r="3" />
          </svg>
          <h2>Voyage</h2>
        </div>
        <a href="#">Help</a>
      </div>

      {/* Card */}
      <div className="card">
        <h1>Join Voyage</h1>
        <p>Create your account to start your journey.</p>

        <form onSubmit={handleRegister}>
          <div className="row">
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            {/* <input type="text" placeholder="Last Name" /> */}
          </div>

          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <input type="password" placeholder="Create Password" onChange={(e) => setConfirmpassword(e.target.value)}  value={confirmpassword}/>

          <div className="row">
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            <input type="date" onChange={(e) => setDob(e.target.value)} />
          </div>
          <input type="text" placeholder="add country" value={country} onChange={(e) => setCountry(e.target.value)} />


          {/* <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            <option value='India'>India</option>
            <option value='USA'>USA</option>
          </select> */}

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
