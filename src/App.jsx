import { useEffect, useState } from "react";
import { getPosts, createPost, deletePost } from "./api";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "../App.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await deletePost(id);
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      alert("Failed to delete post");
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <h1>Facebook Clone</h1>
      <PostForm onPostCreated={fetchPosts} />
      <PostList posts={posts} onDelete={handleDelete} />
    </div>
  );
}
