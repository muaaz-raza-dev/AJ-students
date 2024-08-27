import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { requestOtpMiddleware } from './middleware/request-otp.m'

const Cookie_key = process.env.NEXT_PUBLIC_COOKIE_KEY || "asdfasdff af43"
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublicRoute = pathname.includes("/auth")
  const userSessionCookie = request.cookies.get(Cookie_key)
  if (userSessionCookie && isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  else if (!isPublicRoute && !userSessionCookie) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  else if (!userSessionCookie && pathname == "/auth/forgot-password") {
    return requestOtpMiddleware(request)
  }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', "/auth", "/auth/:path*"],
}