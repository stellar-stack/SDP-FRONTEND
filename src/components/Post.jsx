// import { useState, useEffect } from "react";
// import "../styles/post.css";
// import { get_users_posts } from "../endpoints/api";
// import { toggleLike } from "../endpoints/api";

// function Post({id, username, liked, liked_count }) {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [clientLiked, setClientLiked] = useState(liked);
//   const [clientLikedCount, setClientLikedCount] = useState(liked_count);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const data = await get_users_posts(username);
//         setPosts(Array.isArray(data) ? data : data.posts || []);
//       } catch {
//         alert("Error getting user's posts");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (username) fetchPosts();
//   }, [username]);

//   const handleToggleLike = async () => {
//     const data = await toggleLike(id)
//     if(data.now_liked) {
//       setClientLiked(true)
//       setClientLikedCount(clientLikedCount + 1)
//     }else {
//       setClientLiked(false)
//       setClientLikedCount(clientLikedCount - 1)
//     }
//   }

//   if (loading) return <p>Loading...</p>;
// return (
//   <div className="post">
//     {posts.map((post, index) => (
//       <div key={index} className="post-card">
//         <h3>{post.username}: {post.caption}</h3>
//         <p>{post.description}</p>
//         <small>{post.formatted_date}</small>

//         <div className="actions">
//           <button onClick={handleToggleLike}>{clientLiked ? '❤️' : '🤍'}</button>
//           💬 0 🔗 Share
//         </div>
//       </div>
//     ))}
//   </div>
// );


// }

// export default Post;


import { useState, useEffect } from "react";
import "../styles/post.css";
import { get_users_posts, toggleLike } from "../endpoints/api";

function Post({ username }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await get_users_posts(username);
        setPosts(data);
      } catch {
        alert("Error getting user's posts");
      } finally {
        setLoading(false);
      }
    };

    if (username) fetchPosts();
  }, [username]);

  const handleToggleLike = async (postId, index) => {
    const data = await toggleLike(postId);

    setPosts(prevPosts =>
      prevPosts.map((post, i) =>
        i === index
          ? {
              ...post,
              liked: data.now_liked,
              likes_count: data.now_liked
                ? post.likes_count + 1
                : post.likes_count - 1,
            }
          : post
      )
    );
  };

  // if (loading) return <p>Loading...</p>;

  return (
    <div className="tweet-list">
      {posts.map((post, index) => (
        <div key={post.id} className="tweet">
          <div className="tweet-header">
            <strong>{post.username}</strong>
            <span className="dot">·</span>
            <span className="date">{post.formatted_date}</span>
          </div>

          {post.caption && (
            <div className="tweet-caption">{post.caption}</div>
          )}

          <div className="tweet-body">
            {post.description}
          </div>

          <div className="tweet-actions">
            <span>Comment</span>

            <span
              className={post.liked ? "liked" : ""}
              onClick={() => handleToggleLike(post.id, index)}
            >
              {post.liked ? "Liked" : "Like"} {post.likes_count}
            </span>

            <span>Share</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
