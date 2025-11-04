export default function PostList({ posts, onDelete }) {
  return (
    <div className="post-list">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p className="empty">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h3>{post.author}</h3>
              <button
                className="delete-btn"
                onClick={() => onDelete(post.id)}
              >
                ✕
              </button>
            </div>
            <p className="post-content">{post.content}</p>
            <p className="post-date">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
