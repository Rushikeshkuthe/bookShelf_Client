import React, { useState,useEffect } from "react";
import SubscriptionPlan from "./SubscriptionPlan"; 
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import { apiDELETE } from "../utils/apiHelpers";
import { useNavigate } from "react-router-dom";



const buttonBaseClasses = "px-4 py-2 rounded text-white";
const sectionBaseClasses = "bg-black p-6 rounded-lg";
const labelBaseClasses = "block text-zinc-400 mb-2";
const inputBaseClasses = "w-full p-2 rounded bg-zinc-700 text-white ";


function Settings() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUserId(parsedUser.id);
      setUsername(parsedUser.username);
      setEmail(parsedUser.email);
      setEmail(parsedUser.avatar);
    }
  }, []);

  const [currentSection, setCurrentSection] = useState("general");
  

  const handleSubscriptionClick = () => {
    setCurrentSection("subscription");
  };

  const handleGeneralSettingsClick = () => {
    setCurrentSection("general");
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await axios.put(`http://localhost:5001/v1/auth/update/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        console.log("Profile updated successfully");
      } else {
        console.log("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await apiDELETE(`v1/auth/deleteUser/${userId}`);
      if (response.status === 200) {
        localStorage.removeItem('token');
        navigate("/login");
      } else {
        console.log("Failed to delete account");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <span className="text-white font-bold text-7xl ">Settings 😒🤦‍♀️</span>
      <p className="text-zinc-400 mt-4">Too Much chik chik repair it HEAR</p>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleGeneralSettingsClick}
          className={`text-purple-500 border-b-2 ${
            currentSection === "general" ? "border-purple-500" : ""
          } pb-2`}
        >
          General settings
        </button>
        <button
          onClick={handleSubscriptionClick}
          className={`text-purple-500 border-b-2 ${
            currentSection === "subscription" ? "border-purple-500" : ""
          } pb-2`}
        >
          Subscription
        </button>
      </div>
      <div className="space-y-6">
        {currentSection === "general" && (
          <>
            <div className={sectionBaseClasses}>
              <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={avatar ? URL.createObjectURL(avatar) : "https://placehold.co/100x100"}
                  alt="Profile Photo"
                  className="w-24 h-24 rounded-full"
                />
                <div className="space-x-2">
                  <input
                    type="file"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="avatar-upload"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className={`${buttonBaseClasses} bg-purple-500 cursor-pointer`}
                  >
                    Upload Profile Photo
                  </label>
                  <button
                    onClick={() => setAvatar(null)}
                    className={`${buttonBaseClasses} bg-zinc-700`}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-zinc-400 mb-4">
                Image size should be at least 300x300px, and less than 500kb,
                allowed files: png and jpg
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelBaseClasses}>Username</label>
                  <div className="flex flex-row items-center">
                    <input
                      type="text"
                      placeholder={username}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={inputBaseClasses}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelBaseClasses}>Email</label>
                  <div className="flex flex-row items-center">
                    <input
                      type="email"
                      placeholder={email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputBaseClasses}
                    />
                    
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleUpdateProfile}
                  className={`${buttonBaseClasses} bg-purple-500`}
                >
                  Save Changes
                </button>
              </div>
            </div>

            {/* <div className={sectionBaseClasses}>
              <h2 className="text-xl font-semibold mb-4">Affiliate ID</h2>
              <p className="text-zinc-400 mb-4">
                You can permanently delete or temporarily freeze your account.
              </p>
              <button className={`${buttonBaseClasses} bg-purple-500`}>
                Get Affiliate ID
              </button>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={sectionBaseClasses}>
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                <button className={`${buttonBaseClasses} bg-purple-500`}>
                  Change Password
                </button>
              </div>

              <div className={sectionBaseClasses}>
                <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
                <button 
                 onClick={handleDeleteAccount}
                className={`${buttonBaseClasses} bg-red-500`}>
                  Delete Account
                </button>
              </div>
            </div>
          </>
        )}

        {currentSection === "subscription" && (
          <div className={sectionBaseClasses}>
            <h2 className="text-xl font-semibold mb-4">Subscription Plans</h2>
            <SubscriptionPlan />
          </div>
        )}
      </div>
    </div>
  );
}
 

export default Settings;
