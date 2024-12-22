import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa"; // Bell Icon
import { AiOutlineUser } from "react-icons/ai"; // User Icon for fallback avatar
import "./profile.css"; // Import CSS for styling

const ProfileSection = () => {
  const [user, setUser] = useState(null); // State to hold user details

  // Simulating data fetching from backend
  useEffect(() => {
    // Simulated API call to fetch user data
    const fetchUserData = async () => {
      const userData = {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "", // Leave blank for fallback icon
      };
      setUser(userData); // Set fetched user data
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      {/* Bell Icon */}
      <div className="profile-bell-icon">
        <FaBell size={20} />
      </div>

      {/* User Profile Section */}
      <div className="profile-section">
        {user?.avatar ? (
          <img src={user.avatar} alt="User Avatar" className="profile-user-avatar" />
        ) : (
          <AiOutlineUser size={30} className="profile-default-avatar" />
        )}

        {/* User Details */}
        <div className="profile-user-details">
          <p className="profile-user-name">{user?.name || "Guest User"}</p>
          <p className="profile-user-email">{user?.email || "guest@example.com"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
