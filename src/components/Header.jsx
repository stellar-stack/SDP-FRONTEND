import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Voyage</h1>

        <input
          className="search"
          placeholder="Search communities or topics"
        />

        <div className="auth-buttons">
          <button className="login">Log In</button>
          <button className="register">Register</button>
        </div>
      </div>
    </header>
  );
}
