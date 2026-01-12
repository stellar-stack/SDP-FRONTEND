import "../styles/admin-dashboard.css";
import AdminSidebar from "../components/AdminSidebar";
import StatsCard from "../components/StatsCard";
import CommunityTable from "../components/CommunityTable";
import ReportedContent from "../components/ReportedContent";

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <div className="admin-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, Administrator</p>
        </div>

        <div className="stats-grid">
          <StatsCard title="Total Users" value="14,205" />
          <StatsCard title="AI Suggestions" value="28.5k" />
          <StatsCard title="New Posts" value="850" />
          <StatsCard title="Pending Reports" value="12" danger />
        </div>

        <div className="admin-content">
          <CommunityTable />
          <ReportedContent />
        </div>
      </main>
    </div>
  );
}
export default AdminDashboard;
