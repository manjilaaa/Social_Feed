import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen flex">
      <div className="w-64 bg-white shadow-md p-6 ">
        
        
  
        <ul className="space-y-4">
          <li className="hover:text-blue-500 cursor-pointer">Posts</li>
          <li className="hover:text-blue-500 cursor-pointer">Add Post</li>
          <li className="hover:text-blue-500 cursor-pointer">Logout</li>
        </ul>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Social Feed</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>User ID: {post.userId}</span>
              <span>Post ID: {post.id}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.body}</p>
            {post.link && (
              <a
                href={post.link}
                className="text-blue-500 underline text-sm"
                target="_blank"
                rel="noreferrer"
              >
                {post.link}
              </a>
            )}

            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 text-sm">
                Comments: {post.comment_count || 0}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Post;
