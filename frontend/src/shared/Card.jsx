import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-purple-400 text-white rounded-lg p-10 my-10 relative">
      {children}
    </div>
  );
};

export default Card;
