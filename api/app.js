import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
const port = process.env.PORT || 8800;
dotenv.config();

const app = express();
const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://estate-fr9ggkpz1-depressedeezs-projects.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
  "https://estate-hub-omega.vercel.app/",
];
// app.use({
//   origin: "url of front-end that you hosted",
//   credentials: true
//   })

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
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
      "Cookie",
    ],
  })
);

app.use(express.json());
app.use(cookieParser());

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

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
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// For local development
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 8800;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

app.listen(port, () => {
  console.log("Server is running!");
});

// import express from "express";
// import cors from "cors";
// import postRoute from "./routes/post.route.js";
// import authRoute from "./routes/auth.route.js";
// import testRoute from "./routes/test.route.js";
// import userRoute from "./routes/user.route.js";
// import chatRoute from "./routes/chat.route.js";
// import messageRoute from "./routes/message.route.js";
// import cookieParser from "cookie-parser";

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/test", testRoute);
// app.use("/api/chats", chatRoute);
// app.use("/api/messages", messageRoute);

// app.listen(8800, () => {
//   console.log("Server is running ");
// });
