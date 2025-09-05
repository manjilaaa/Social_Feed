import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const AddPost = () => {
  const [post, setPost] = useState({ userId: "", title: "", body: "", link: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Posted Successfully");
    navigate("/post");
  };

  return (
    <div className="flex">
      {/* Sidebar fixed on left */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg shadow space-y-4"
        >
          <input
            type="text"
            name="userId"
            value={post.userId}
            onChange={handleChange}
            placeholder="User ID"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Post Title"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="body"
            value={post.body}
            onChange={handleChange}
            placeholder="Post Body"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="link"
            value={post.link}
            onChange={handleChange}
            placeholder="Link (optional)"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
