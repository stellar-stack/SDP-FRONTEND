import "../styles/admin-table.css";

export default function CommunityTable() {
  return (
    <div className="table-box">
      <h3>Communities</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI ML</td>
            <td>16.4k</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>14.8k</td>
            <td>Edit | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
