import { Cart } from "../models/cart.model.js";
import { User } from "../models/user.model.js";

export const addToCart = async (req, res) => {
  const { userId, items, address, phoneNumber } = req.body;
  
  try {
    // Calculate total price
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    

    // Create new cart
    const cart = new Cart({
      userId,
      items,
      address,
      phoneNumber,
      total,
      status: "completed",
    });
    
    await cart.save();

    // Save the cart to user's purchase history
    const user = await User.findById(userId);
    
    user.purchaseHistory = user.purchaseHistory || [];
    user.purchaseHistory.push(cart._id);
    await user.save();

    res.status(201).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserCart = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by ID and populate the purchaseHistory field
    const user = await User.findById(userId)
      .populate({
        path: "purchaseHistory",
        populate: {
          path: "items.productId", // Populate the items in the cart
        },
      })
      .exec();

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, purchaseHistory: user.purchaseHistory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
 
};


 // try {
  //   const cart = await Cart.find({ userId, status: "completed" }).populate("items.productId");
  //   res.status(200).json({ success: true, cart });
  // } catch (error) {
  //   res.status(500).json({ success: false, message: error.message });
  // }