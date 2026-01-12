import "../styles/admin-cards.css";

export default function StatsCard({ title, value, danger }) {
  return (
    <div className={`stat-card ${danger ? "danger" : ""}`}>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}
