import { RegisterFormSchema, RegisterFormState } from "@/lib/validations";

export async function register(state: RegisterFormState, formData: FormData) {

  const validatedFields = RegisterFormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {

    const res = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-Type": "application/json",
      },
    });


    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    }

  
    const data = await res.json();
    console.log(data);

    return { data };  

  } catch (error) {
    console.error("Registration Error:", error);
    return { error: error.message };
  }
}
