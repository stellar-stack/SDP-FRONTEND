import "../styles/admin-reports.css";

export default function ReportedContent() {
  return (
    <div className="reports-box">
      <h3>Reported Content</h3>

      <div className="report-card">
        <p className="user">User_92 • r/Python</p>
        <p className="text">"This project is useless..."</p>
        <div className="actions">
          <button className="approve">Approve</button>
          <button className="reject">Suspend</button>
        </div>
      </div>
    </div>
  );
}
