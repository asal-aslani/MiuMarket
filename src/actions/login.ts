'use server'
import "server-only";
import { LoginFormSchema, LoginFormState } from "@/lib/validations";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";



const BASE_URL=process.env.BASE_URL;

export async function login(state: LoginFormState, formData: FormData) {

  const validatedFields = LoginFormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-Type": "application/json",
      },
    });


    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    } else {
      const data = await res.json(); // این خط داده‌ها رو از پاسخ سرور استخراج می‌کنه
      
      await createSession({
        accessToken: data.tokens.accessToken,
        refreshToken: data.tokens.refreshToken,
      });
      
      redirect('/dashboard');
    }

  } 

