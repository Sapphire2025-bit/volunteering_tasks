"use client";
import React, { useState, useEffect } from "react";
import { verifyUser, rejectUser } from "../../services/verifyUser";
import NewUserCardProps from "../../types/users/newUsers/newUserCardProps";
import Avatar from "./Avatar";
import Compressor from "compressorjs";

//learn code
 
const NewUserCard: React.FC<NewUserCardProps> = ({ userInfo, setVerified }) => {
  const [compressedImage, setCompressedImage] = useState<string | null>(null);

  // פונקציה לדחיסת התמונה
  useEffect(() => {
    // console.log(userInfo.faceImage);
    
  }, [userInfo.faceImage]);

  return (
    <div className="w-3/4 p-4 m-auto my-8 bg-sky-100 border-sky-500 flex flex-col gap-4 shadow-xl shadow-gray-300">
      <div className="font-bold text-lg">{userInfo.username}</div>
      <div className="text-lg">email: {userInfo.email}</div>
      <div>About me: </div>
      <div className="border-2 border-gray-200 w-1/2">{userInfo.freeText}</div>
      <div className="h-14 w-14 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
        {userInfo.faceImage ? (
          <Avatar faceImage={userInfo.faceImage} />
        ) : (
          <span className="text-white text-sm">Avatar</span>
        )}
      </div>
      <div>Added on: {new Date(userInfo.signTime).toLocaleString()}</div>
      <div className="flex justify-end w-full">
        <button
          onClick={async () => {
            await verifyUser(userInfo._id);
            setVerified(userInfo._id);
          }}
          className="blue-button"
        >
          Verify User
        </button>
        <button
          onClick={async () => {
            await rejectUser(userInfo._id);
            setVerified(userInfo._id);
          }}
          className="red-button"
        >
          Reject User
        </button>
      </div>
    </div>
  );
};

export default NewUserCard;