import React, { useState, useEffect } from "react";

const RatingSelect = ({ rating, feedbackEdit }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleRatingChange = (value) => {
    setSelected(value);
    rating(value);
  };
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-white px-10 py-5 font-bold">Select a Rating:</h1>
      <div className="flex flex-wrap gap-5 justify-center px-10">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleRatingChange(index + 1)}
            className={`rounded-full py-2 px-4 ${
              selected === index + 1
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingSelect;
