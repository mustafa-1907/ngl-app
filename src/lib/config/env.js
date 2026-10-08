import {z} from "zod";
import {config} from 'dotenv'
config()

const envSchema = z.object({
    APP_PORT: z.string().default("3000"),
    MONGODB_URL: z.string(),
    NODEMAILER_USER: z.string().lowercase().trim(),
    NODEMAILER_PASS: z.string(),
    JWT_SECRET: z.string(),
})

const parsedData = envSchema.parse(process.env);

export const env = {
    port : parsedData.APP_PORT,
    db: {
        database : parsedData.MONGODB_URL,
    },
    nodeMailer : {
        user:parsedData.NODEMAILER_USER,
        pass:parsedData.NODEMAILER_PASS,
    },
    jwt:{
        secret: parsedData.JWT_SECRET,
    }
}