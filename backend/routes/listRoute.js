const express = require("express");
const {
  GetFeedbacks,
  CreateFeedback,
  UpdateFeedback,
  GetFeedbackById,
  DeleteFeedback,
} = require("../controllers/listController");

const router = express.Router();

router.route("/").get(GetFeedbacks);
router.route("/create-list").post(CreateFeedback);
router
  .route("/:id")
  .get(GetFeedbackById)
  .delete(DeleteFeedback)
  .put(UpdateFeedback);

module.exports = router;
