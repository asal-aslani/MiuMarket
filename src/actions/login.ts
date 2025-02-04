'use server'
import "server-only";
import { LoginFormSchema, LoginFormState } from "@/lib/validations";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";





export async function login(state: LoginFormState, formData: FormData) {

  const validatedFields = LoginFormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  
    const res = await fetch("http://localhost:8000/auth/login", {
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
      
      redirect('/auth/dashboard');
    }

  } 

