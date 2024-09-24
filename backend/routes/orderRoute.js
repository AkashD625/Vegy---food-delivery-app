import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verifyOrder } from "../controlers/orderControler.js"

const orderRouter = express.Router();


orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder)
export default orderRouter;