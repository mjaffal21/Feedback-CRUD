import React, { useState, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateListMutation } from "../slices/FeedbackApiSlice";

const FeedbackForm = ({ feedbackEdit, updateFeedback }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [createList] = useCreateListMutation();

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedbackEdit.edit === true) {
      updateFeedback({ _id: feedbackEdit.item._id, text, rating });
      setText("");
      toast.success("Feedback updated successfully!");
    } else {
      await createList({ text, rating }).unwrap();
      setText("");
      toast.success("Feedback created successfully!");
    }
  };

  return (
    <>
      <RatingSelect
        rating={(rating) => setRating(rating)}
        feedbackEdit={feedbackEdit}
      />
      <div className="max-w-xl mx-auto px-10 my-4">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Write Your Feedback..."
              className="p-2 rounded-md my-3 w-full outline-none"
              name="text"
              value={text}
              required
              onChange={handleTextChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-purple-500 border border-1 border-white rounded-lg p-2 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
