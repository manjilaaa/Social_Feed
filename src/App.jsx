import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Components/login";
import Post from "./Components/Post";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddPost from "./Components/AddPost";
function App() {
  
  return (
    <>
    <Router basename="/Social_Feed" >
      <Routes>
        <Route path="/" element={ <Login/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
        <Route path="/add" element={<AddPost/>}></Route>
      </Routes>



    </Router>
    
      
     

    </>
  );
}

export default App;
