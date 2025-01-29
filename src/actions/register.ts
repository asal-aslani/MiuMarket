import { RegisterFormSchema, RegisterFormState } from "@/lib/validations";

export async function register(state:RegisterFormState, formData:FormData,) {
    const validatedFields = RegisterFormSchema.safeParse(Object.fromEntries(formData.entries())
)
if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
}