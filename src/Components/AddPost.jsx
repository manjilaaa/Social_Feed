import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {  IoIosLink, IoIosSend } from "react-icons/io";

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
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
     
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>
      
   
      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-purple-800 mb-2">Create New Post</h2>
            <p className="text-purple-500">Share your thoughts.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
             
              
           
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={post.title}
                  onChange={handleChange}
                  placeholder="Add a catchy title..."
                  className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  name="body"
                  value={post.body}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows="5"
                  className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
          
              
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center">
                    <IoIosLink className="mr-2 text-purple-500" />
                    Add Link (Optional)
                  </div>
                </label>
                <input
                  type="text"
                  name="link"
                  value={post.link}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center"
              >
                <IoIosSend className="mr-2" />
                Publish Post
              </button>
            </form>
          </div>
          
       
        </div>
      </div>
    </div>
  );
};

export default AddPost;