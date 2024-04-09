import React from "react";
import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useDeleteListMutation } from "../slices/FeedbackApiSlice";

const FeedbackItem = ({ list, editFeedback }) => {
  const [deleteList] = useDeleteListMutation();

  const deleteFeedback = async (id) => {
    await deleteList({ id });
    toast.success("Feedback deleted successfully!")
  };

  return (
    <Card>
      <p className="absolute -top-5 -left-5 rounded-full bg-pink-500 py-3 px-5">
        {list.rating}
      </p>
      <div className="flex justify-between items-center">
        <p className="w-[80%]">{list.text}</p>
        <div className="flex gap-2">
          <button>
            <FaTimes color="purple" onClick={() => deleteFeedback(list._id)} />
          </button>
          <button className="mb-[2px]">
            <FaEdit color="purple" onClick={() => editFeedback(list)} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FeedbackItem;
