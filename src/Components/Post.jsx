import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Post = () => {
  const [posts, setPosts] = useState([]);
 
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
    
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);

 

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="fixed top-0 left-0 h-full">

           <Sidebar />
      </div>
     
      
      <div className="flex-1  ml-64 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto">
         
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-purple-800 mb-2">Social Feed</h1>
            <p className="text-purple-500">Welcome back, {userEmail}</p>
          </div>

          
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold mr-4">
              {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="flex-grow text-gray-500">
              What's on your mind?
            </div>
            <Link 
              to="/add"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Create Post
            </Link>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
               
                <div className="p-4 border-b border-purple-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold mr-3">
                      {post.userId.toString().charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">User {post.userId}</h3>
                      
                    </div>
                  </div>
                </div>
              
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-purple-800 mb-2">{post.title}</h2>
                  <p className="text-gray-700 mb-4">{post.body}</p>
                  
                  {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
                    </div>
                  )}
                  
                  {post.link && (
                    <a
                      href={post.link}
                      className="text-purple-500 hover:text-purple-700 text-sm flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="truncate">{post.link}</span>
                    </a>
                  )}
                </div>
                

                
             
                <div className="px-4 py-2 border-t border-purple-100">
                  <p className="text-sm text-gray-500">
                    {post.comment_count || 0} comments
                  </p>
                </div>
              </div>
            ))}
          </div>
          
       
          {posts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl text-purple-200 mb-4">📝</div>
              <h3 className="text-xl text-purple-700 font-semibold mb-2">No posts yet</h3>
              <p className="text-purple-500">Be the first to share something!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;