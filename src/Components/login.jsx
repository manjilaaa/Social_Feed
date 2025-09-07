import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, } from "react-icons/fa";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(5, "Password must be at least 5 characters long"),
});

const Login = () => {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("userEmail", data.email);
    navigate("/post");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
       
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">SocialFeed</h1>
          <p className="text-purple-100 mt-2">Share your moments with the world</p>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600 text-center mb-6">Please login to your account</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
         
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-lg focus:ring-3 focus:ring-purple-500 "
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="ml-1">{errors.email.message}</span>
                </p>
              )}
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="ml-1">{errors.password.message}</span>
                </p>
              )}
            </div>
           
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>

         
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-purple-500 hover:text-purple-600">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Login;