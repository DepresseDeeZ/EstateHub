// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import authRoute from "./routes/auth.route.js";
// import postRoute from "./routes/post.route.js";
// import testRoute from "./routes/test.route.js";
// import userRoute from "./routes/user.route.js";
// import chatRoute from "./routes/chat.route.js";
// import messageRoute from "./routes/message.route.js";
// const port = process.env.PORT || 8800;
// const app = express();

// // app.use({
// //   origin: "url of front-end that you hosted",
// //   credentials: true
// //   })
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/test", testRoute);
// app.use("/api/chats", chatRoute);
// app.use("/api/messages", messageRoute);

// app.listen(port, () => {
//   console.log("Server is running!");
// });

// // import express from "express";
// // import cors from "cors";
// // import postRoute from "./routes/post.route.js";
// // import authRoute from "./routes/auth.route.js";
// // import testRoute from "./routes/test.route.js";
// // import userRoute from "./routes/user.route.js";
// // import chatRoute from "./routes/chat.route.js";
// // import messageRoute from "./routes/message.route.js";
// // import cookieParser from "cookie-parser";

// // const app = express();
// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// // app.get("/", (req, res) => {
// //   res.send("Hello World");
// // });
// // app.use("/api/auth", authRoute);
// // app.use("/api/users", userRoute);
// // app.use("/api/posts", postRoute);
// // app.use("/api/test", testRoute);
// // app.use("/api/chats", chatRoute);
// // app.use("/api/messages", messageRoute);

// // app.listen(8800, () => {
// //   console.log("Server is running ");
// // });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();
const port = process.env.PORT || 8800;

// CORS Configuration
const allowedOrigins = [
  "https://estate-hub-omega.vercel.app",
  "http://localhost:5173", // Add your local development URL
  process.env.CLIENT_URL,
].filter(Boolean); // Remove any undefined values

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
  exposedHeaders: ["Set-Cookie"],
  preflightContinue: true,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
