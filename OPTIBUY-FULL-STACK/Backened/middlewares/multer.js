// middlewares/multer.js
import multer from "multer";

const storage = multer.memoryStorage(); // Change to memory storage

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  }
});

export default upload;