import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']; 
const publicRoutes = ['/', '/auth/login', '/auth/register']; // اضافه کردن مسیرهای لاگین و ریجستر

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  const isPublicRoute = publicRoutes.some(route => path.startsWith(route));

  // 3. Decrypt the session from the cookie
  const accessToken = (await cookies()).get('accessToken')?.value;

  // 4. Redirect to /auth/login if the user is not authenticated and tries to access protected routes
  if (isProtectedRoute && !accessToken) {
    // اصلاح URL
    const loginUrl = new URL('/auth/login', req.url);  // تغییر req.nextUrl به req.url
    return NextResponse.redirect(loginUrl);
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && !isProtectedRoute && accessToken) {
    const dashboardUrl = new URL('/dashboard', req.url);  // تغییر req.nextUrl به req.url
    return NextResponse.redirect(dashboardUrl);
  }

  // 6. Allow access to other routes
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}