import {z} from 'zod'
export const registerDto = z.object({
    name: z.string().min(3).trim(),
    email: z.email().toLowerCase().trim(),
    password: z.string().min(4).max(12),
    dateOfBirth: z.string(),
    phone: z.string().length(11),
})

export const sendOtpDto = z.object({
    email: z.email().toLowerCase().trim(),
})

export const verifyAccountDto = z.object({
    email: z.email().toLowerCase().trim(),
    code : z.string().length(6).trim(),
})

export const loginDto = z.object({
    email: z.email().toLowerCase().trim(),
    password: z.string().min(6).max(12),
})