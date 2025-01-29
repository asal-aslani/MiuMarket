import { z } from 'zod'
 
export const RegisterFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'حداقل دو کارکتر وارد کنید' })
    .trim(),
    lastName: z
    .string()
    .min(2, { message: 'حداقل دو کارکتر وارد کنید' })
    .trim(),
  email: z.string().email({ message: 'لطفا یک ایمیل معتبر وارد کنید' }).trim(),
  password: z
    .string()
    .min(8, { message: 'حداقل هشت کارکتر' })
    .regex(/[a-zA-Z]/, { message: ' شامل یک حرف' })
    .regex(/[0-9]/, { message: 'شامل یک عدد' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'شامل یک کارکتر عجیب باشد',
    })
    .trim(),
})
 
export type RegisterFormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined