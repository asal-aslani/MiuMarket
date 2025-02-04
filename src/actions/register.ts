'use server';
import "server-only";
import { RegisterFormSchema, RegisterFormState } from "@/lib/validations";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";


export async function register(state: RegisterFormState, formData: FormData) {
  // اعتبارسنجی داده‌های فرم با Zod
  const validatedFields = RegisterFormSchema.safeParse(Object.fromEntries(formData.entries()));

  // اگر اعتبارسنجی ناموفق بود، خطاهای فیلدها را برگردان
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  
    // ارسال درخواست ثبت‌نام به API
    const res = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // بررسی پاسخ API
    if (!res.ok) {
      const errorResponse = await res.json();
      
      // اگر سرور خطاهای فیلدی برگرداند، آنها را نمایش بده
      if (errorResponse.errors) {
        return { errors: errorResponse.errors };
      }

      // در غیر این صورت یک پیام کلی نمایش بده
      throw new Error(`Server Error: ${res.status} - ${errorResponse.message || "Unknown error"}`);
    }

    const data = await res.json();

    // بررسی دریافت توکن‌ها از سرور
    if (!data.tokens?.accessToken || !data.tokens?.refreshToken) {
      throw new Error("توکن‌ها از سرور دریافت نشدند.");
    }

    // ایجاد سشن کاربر با توکن‌ها
    await createSession({
      accessToken: data.tokens.accessToken,
      refreshToken: data.tokens.refreshToken,
    });

    // ریدایرکت به داشبورد پس از ثبت‌نام موفق
    redirect('/auth/dashboard');

  } 
  
