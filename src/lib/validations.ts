import { z } from 'zod';

export const RegisterFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: 'حداقل دو کارکتر وارد کنید' }),

  lastName: z
    .string()
    .trim()
    .min(2, { message: 'حداقل دو کارکتر وارد کنید' }),

  email: z
    .string()
    .trim()
    .email({ message: 'لطفا یک ایمیل معتبر وارد کنید' }),

  password: z
    .string()
    .trim()
    .min(8, { message: 'رمز عبور باید حداقل 8 کاراکتر باشد' })
    .regex(/[a-zA-Z]/, { message: 'رمز عبور باید شامل حداقل یک حرف باشد' })
    .regex(/[0-9]/, { message: 'رمز عبور باید شامل حداقل یک عدد باشد' })
    .regex(/[^a-zA-Z0-9]/, { message: 'رمز عبور باید شامل حداقل یک کاراکتر خاص باشد' }),

  confirmPassword: z
    .string()
    .trim()
    .min(8, { message: 'تأیید رمز عبور باید حداقل 8 کاراکتر باشد' })
}).refine((data) => data.password === data.confirmPassword, {
  message: 'رمز عبور و تأیید رمز عبور مطابقت ندارند',
  path: ['confirmPassword'],
});

export type RegisterFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];  // اضافه شدن ارورهای تأیید رمز عبور
      };
      message?: string;
    }
  | undefined;
  
    export const LoginFormSchema = z.object({
      email: z
        .string()
        .trim()
        .email({ message: 'لطفا یک ایمیل معتبر وارد کنید' }),
    
      password: z
        .string()
        .trim()
        .min(8, { message: 'رمز عبور باید حداقل 8 کاراکتر باشد' })
        .regex(/[a-zA-Z]/, { message: 'رمز عبور باید شامل حداقل یک حرف باشد' })
        .regex(/[0-9]/, { message: 'رمز عبور باید شامل حداقل یک عدد باشد' })
        .regex(/[^a-zA-Z0-9]/, { message: 'رمز عبور باید شامل حداقل یک کاراکتر خاص باشد' }),
    });
    
    export type LoginFormState =
      | {
          errors?: {
            email?: string[];
            password?: string[];
          };
          message?: string;
        }
      | undefined;
    