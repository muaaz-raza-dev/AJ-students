import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
const key =process.env.NEXT_PUBLIC_FORGOT_COOKIE_KEY||''
export function requestOtpMiddleware(req:NextRequest) {
  const token = req.cookies.get(key);
  if (!token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/auth/otp', req.url));
}