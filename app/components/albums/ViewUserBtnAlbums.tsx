'use client'
import React from "react";

interface ViewUserBtnAlbumsProps {
  name: string;
}

const ViewUserBtnAlbums: React.FC<ViewUserBtnAlbumsProps> = ({ name }) => {
  const handleClickBtn = () => alert(`User Name: ${name}`);

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

export default ViewUserBtnAlbums;
