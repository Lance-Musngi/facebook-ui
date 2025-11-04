const API_URL = "https://facebook-api-8vmy.onrender.com/api/posts";

export async function getPosts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function createPost(postData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  // If status is not OK (200–299), throw error
  if (!res.ok) throw new Error("Failed to create post");

  // Safely handle cases where backend returns no JSON
  try {
    return await res.json();
  } catch {
    return null; // Backend returned no content (e.g., 201 Created without body)
  }
}
