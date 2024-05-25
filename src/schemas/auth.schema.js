import { z } from 'zod'

export const registerschema = z.object({
    user: z.string({
        required_error: 'last_name is required'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{ message: 'Password must be at least 6 characters'}),
    role: z.string({
        required_error: 'last_name is role'
    }),
})

export const loginschema = z.object({
    user: z.string({
        required_error: 'last_name is required'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{ message: 'Password must be at least 6 characters'})
})