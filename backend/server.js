const express = require("express");
const asyncHandler = require("./middlewares/asyncHandler");
const errorHandler = require("./middlewares/ErrorHandler");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const port = process.env.PORT;

connectDB();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());

const listRoutes = require("./routes/listRoute");

app.use("/api/feedbacks", listRoutes);

const __dir = path.resolve();
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static(path.join(__dir, "/frontend/build")));
  // any route that is not api will be redirected to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dir, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(asyncHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
