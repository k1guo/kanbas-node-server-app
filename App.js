import "dotenv/config";
import session from "express-session";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Courses/Assignments/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";

// const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://keying01152000:Aa001220GKYGKYGKY@kanbas.0m61h.mongodb.net/kanbas?retryWrites=true&w=majority&appName=Kanbas"
// mongoose.connect(CONNECTION_STRING);

mongoose.connect("mongodb+srv://keying01152000:Aa001220GKYGKYGKY@kanbas.0m61h.mongodb.net/kanbas?retryWrites=true&w=majority&appName=Kanbas");


const app = express()

// app.use(cors({
//   credentials: true,
//   origin: process.env.NETLIFY_URL || "http://localhost:3000",
// }));

const allowedOrigins = [
  "http://localhost:3000",
  "https://kanbas-react-web-app-cs5610-fa24-keyi.netlify.app", 
  // 替换为你的 Netlify 或 Render 前端地址
];

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};


if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));


app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000);