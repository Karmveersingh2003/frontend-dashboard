import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [userData, setUserData] = useState(null); // User data after login



  // Fetch user data after login
  useEffect(() => {
    
      const fetchUserData = async () => {
        // Replace this with a real API call
        const userData = {
          name: "John Doe",
        
        };
        setUserData(userData);
      };

      fetchUserData();
    
  });

  return (
    <div className="app">
   
        <div className="welcome-container">
          <h1>
            Welcome, <span className="user-name">{userData?.name || "User"}</span>!
          </h1>
          <p>Your email</p>
        </div>
    
    </div>
  );
};

export default Home;
