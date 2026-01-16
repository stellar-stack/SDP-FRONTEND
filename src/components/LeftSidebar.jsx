import "../styles/sidebar.css";

function LeftSidebar({
  handleToggleFollow,
  is_our_profile,
  following,
  username,
  bio,
  profile_picture,
  following_count,
  follower_count
}) {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        <img
          className="avatar"
          src={`http://127.0.0.1:8000/api/${profile_picture}`}
          alt="user"
        />

        <h2 className="username">{username}</h2>

        <div className="stats">
          <span>
            <strong>{follower_count}</strong> Followers
          </span>
          <span>
            <strong>{following_count}</strong> Following
          </span>
        </div>

        <p className="bio">{bio}</p>

        <button
          className={following ? "btn outline" : "btn"}
          onClick={!is_our_profile ? handleToggleFollow : undefined}
        >
          {is_our_profile ? "Edit Profile" : following ? "Unfollow" : "Follow"}
        </button>
      </div>

      <ul className="menu">
        <li>My Feed</li>
        <li>Recent</li>
        <li>AI / ML</li>
        <li>Data Science</li>
      </ul>
    </aside>
  );
}

export default LeftSidebar;
