import { z } from 'zod'

export const gastronomyschema = z.object({
    name: z.string({
        required_error: 'name is required'
    }),
    address: z.string({
        required_error: 'address is required'
    }),
    photo_url: z.string({
        required_error: 'photo_url is required'
    }),
})

