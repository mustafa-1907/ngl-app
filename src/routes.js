import {Router} from 'express';
import userRouter from "./app/user/user.route.js";
import authRouter from "./app/auth/auth.route.js";

export const appRouter = Router();

appRouter.use('/auth', authRouter)
appRouter.use('/users', userRouter)
