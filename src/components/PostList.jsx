import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../api';

function PostList({ posts, setPosts }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Try again later.");
    }
  };

  return (
    <div>
      <h3>All Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-card">
            <div className="post-content">
              <div className="post-author">{post.author}</div>
              <div className="post-text">{post.content}</div>
            </div>
            <button className="remove-btn" onClick={() => handleDelete(post.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
