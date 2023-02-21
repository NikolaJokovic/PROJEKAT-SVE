import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../middleware/AuthMiddleware.js";
import Order from "../modeli/orderModel.js";

const orderRouter = express.Router();

orderRouter.post(
    "/", 
    protect,
    asyncHandler(async(req,res)=>{
    const {orderItems,shippingAddress,itemsPrice,shippingPrice,totalPrice}= req.body;
    if (orderItems && orderItems.length ===0) {

        res.status(400);
        throw new Error("No order items");
        return
    }else {
        const order = new Order({
            orderItems,
            shippingAddress,
            itemsPrice,
            shippingPrice,
            totalPrice,

        })
        const createOrder = await order.save();
        res.status(201).json(createOrder);
    }
    })
);
export default orderRouter;