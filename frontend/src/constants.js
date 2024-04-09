export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001"
    : "https://feedback-crud-mern.onrender.com";

export const LISTS_URL = "/api/feedbacks";
