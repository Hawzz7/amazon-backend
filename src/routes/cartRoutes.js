import express from "express";
import { addToCart, getUserCart } from "../controllers/cart.controller.js";

const router = express.Router();

// Add items to cart and save purchase history
router.post("/add", addToCart);

// Get user purchase history in order page of frontend
router.get("/:userId/history", getUserCart);

export default router;
