import React from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "../shared/Spinner";

const FeedbackList = ({ lists, isLoading, editFeedback }) => {
  return (
    <div className="max-w-xl mx-auto px-10 my-4 text-white">
      {lists &&
        lists.length > 0 &&
        lists.map((list) => (
          <FeedbackItem
            key={list._id}
            list={list}
            editFeedback={editFeedback}
          />
        ))}
      {isLoading && <Spinner />}
    </div>
  );
};

export default FeedbackList;
