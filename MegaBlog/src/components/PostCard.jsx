/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import appWriteService from "../appwrite/appwriteConfig.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appWriteService.GetFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
