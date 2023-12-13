import { z } from 'zod'

export const CheckoutSchema = z.object({
  lastName: z
    .string({
      invalid_type_error: 'Last name must be a string',
    })
    .regex(/^[a-zA-Zа-яА-Я]+$/, {
      message: 'Last name must contain only letters',
    })
    .min(1, {
      message: 'Last name is required',
    }),
  phone: z.string({ invalid_type_error: 'Phone must be a string' }).regex(/^\d{10}$/, {
    message: 'Phone must be a valid phone number. For example: 1234567890',
  }),
  email: z.string({ invalid_type_error: 'Email must be a string' }).email({
    message: 'Email must be a valid email address. Example: p7kI7@example.com',
  }),
})
