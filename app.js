import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import helmet from "helmet";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";


dotenv.config();

void process.on('unhandledRejection', (reason, p) => {
    console.log(`Here is the BIG ERROR: \n`.red + p)
    console.log(`That's because of: \n`.red + reason)
})

const app = express();
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies())
app.use(helmet.referrerPolicy())
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"] 
    }
}))

// 接口权限管理

// app.use(function (req, res, next) {
//     res.setHeader(
//       'Content-Security-Policy-Report-Only',
//       "default-src 'self' https://ka-f.fontawesome.com; font-src 'self' https://ka-f.fontawesome.com; img-src 'self' https://images.unsplash.com https://maps.gstatic.com; script-src 'self' https://kit.fontawesome.com/56a258cb08.js https://maps.googleapis.com; style-src 'self' https://fonts.googleapis.com/; frame-src 'self'"
//     );
//     next();
//   });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// cors
var corsOptions = {
    origin: ["http://localhost:3000", "https://macvlearnlocal.com"],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);




export default app;