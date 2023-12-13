'use server'

import { CheckoutSchema } from '@/lib/utils'

export type CheckoutActionState = {
  errors?: {
    lastName?: string[]
    email?: string[]
    phone?: string[]
  }
  message?: string | null
}

export async function checkout(prevState: CheckoutActionState, formData: FormData) {
  const validatedFields = CheckoutSchema.safeParse({
    lastName: formData.get('lastName'),
    firstName: formData.get('firstName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.formErrors.fieldErrors,
      message: 'Missing required fields. Failed to checkout.',
    }
  }

  throw new Error('Not implemented')
}
