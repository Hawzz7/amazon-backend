import { ApiError } from '../utils/ApiError.js';

const errorHandler = (err, req, res, next) => {
  // If the error is an instance of ApiError, send the custom response
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }

  // If the error is not an instance of ApiError, send a generic response
  return res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export { errorHandler };