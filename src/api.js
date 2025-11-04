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

  if (!res.ok) {
    console.error("Response not OK:", res.status, res.statusText);
    throw new Error("Failed to create post");
  }

  // ✅ Handle empty response body safely
  const text = await res.text();
  if (!text) return null; // Backend returned no content
  try {
    return JSON.parse(text);
  } catch (err) {
    console.warn("Response was not valid JSON:", err);
    return null;
  }
}
