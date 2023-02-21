import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import { errorHandler, notFound } from "./middleware/Errors.js";
import userRouter from "./routes/UserRoutes.js";
import productRoute from "./routes/ProductRoutes.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
//API 
app.use("/api/import", ImportData);
app.use("/api/products", productRoute); 
app.use("/api/users",userRouter);
app.use("api/orders", orderRouter);

app.use(notFound);
app.use(errorHandler); 

 
const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
