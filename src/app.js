import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

//import routes here
import userRouter from "./routes/user.routes.js";
import cartRouter from "./routes/cartRoutes.js";

//routes declaration
app.use("/users", userRouter);
app.use("/cart", cartRouter);

export { app };
