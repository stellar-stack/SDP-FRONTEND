import "../styles/admin-sidebar.css";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2 className="logo">Voyage Admin</h2>

      <nav>
        <a className="active">Dashboard</a>
        <a>User Management</a>
        <a>Community Management</a>
        <a>Post Management</a>
        <a>Moderation Queue</a>
        <a>Reports</a>
        <a>Settings</a>
      </nav>

      <button className="logout">Logout</button>
    </aside>
  );
}
