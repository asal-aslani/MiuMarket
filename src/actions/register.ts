'use server'
import "server-only";
import { RegisterFormSchema, RegisterFormState } from "@/lib/validations";
import { redirect } from "next/navigation";

const BASE_URL=process.env.BASE_URL;

export async function register(state: RegisterFormState, formData: FormData) {

  const validatedFields = RegisterFormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {

    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-Type": "application/json",
      },
    });


    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    }else{
      await createSession({
        accessToken: data.token.accessToken,
        refreshToken: data.token.refreshToken,
      });
      redirect('/profile')
    }

  
    const data = await res.json();
    console.log(data);

    return { data };  

  } catch (error) {
    console.error("Registration Error:", error);
    return { error: error.message };
  }
}
