'use client'
import React from "react";

interface ViewUserBtnProps {
  userId: number;
}

const ViewUserBtn: React.FC<ViewUserBtnProps> = ({ userId }) => {
  const handleClickBtn = () => alert(`User Id: ${userId}`);

  return (
    <div className="mt-3">
      <button
        className="bg-white hover:bg-teal-500 text-teal-800 hover:text-white font-bold py-2 px-4 rounded"
        onClick={handleClickBtn}
      >
        View User
      </button>
    </div>
  );
};

export default ViewUserBtn;
