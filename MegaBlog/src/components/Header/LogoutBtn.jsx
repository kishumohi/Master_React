/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/appwriteConfig.js";
import { logout } from "../../store/authSlice.js";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
};

export default LogoutBtn;
