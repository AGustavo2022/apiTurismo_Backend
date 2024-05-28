import { z } from 'zod'

export const gastronomyschema = z.object({
    name: z.string({
        required_error: 'name is required'
    }),
    address: z.string({
        required_error: 'address is required'
    })
})

