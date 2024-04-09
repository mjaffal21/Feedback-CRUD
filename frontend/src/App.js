import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import {
  useGetListsQuery,
  useUpdateListMutation,
} from "./slices/FeedbackApiSlice";
import { useState } from "react";

function App() {
  const { data: lists, isLoading } = useGetListsQuery();
  const [updateList] = useUpdateListMutation();
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    await updateList(id, updItem).unwrap();
  };
  return (
    <div className="bg-black pb-10 min-h-screen">
      <Header />
      <FeedbackForm
        feedbackEdit={feedbackEdit}
        updateFeedback={updateFeedback}
      />
      <FeedbackList
        lists={lists}
        isLoading={isLoading}
        editFeedback={editFeedback}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
