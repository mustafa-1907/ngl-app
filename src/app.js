import express from 'express'
import './lib/db/mongoose.js'
import cookieParser from "cookie-parser";
import {globalErrorHandler} from "./lib/errors/global.error.js";
import {appRouter} from "./routes.js";


export const createApp = () => {

    const app = express()
    app.use(express.json())
    app.use(cookieParser())
    app.use('/ngl/api',appRouter)

    app.use(globalErrorHandler)


    return app;
}