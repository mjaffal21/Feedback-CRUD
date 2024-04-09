const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middlewares/asyncHandler");
const List = require("../models/List");

exports.GetFeedbacks = asyncHandler(async (req, res, next) => {
  const lists = await List.find();
  if (lists.length === 0) {
    return res.status(200).json({ text: "No Feedbacks Found!" });
  }
  res.status(200).json(lists);
});
exports.GetFeedbackById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const list = await List.findById(id);
  if (list) {
    return res.status(200).json(list);
  }
  next(new ErrorResponse(`Feedback with id ${id} is not found`, 400));
});
exports.CreateFeedback = asyncHandler(async (req, res, next) => {
  const { text, rating } = req.body;
  if (!text || !rating) {
    return next(new ErrorResponse("Fields are required", 400));
  }
  const list = await List.create({ text, rating });
  res.status(201).json(list);
});
exports.DeleteFeedback = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const list = await List.findById(id);
  if (!list) {
    return next(new ErrorResponse("No Listing Found!!", 404));
  }
  const deleteList = await List.findByIdAndDelete(id);
  res.status(200).json(deleteList);
});
exports.UpdateFeedback = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const listing = await List.findById(id);
  if (!listing) {
    return next(new ErrorResponse("No Listing Found!", 404));
  }
  const updatedListing = await List.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedListing);
});
