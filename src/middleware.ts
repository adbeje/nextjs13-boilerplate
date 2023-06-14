import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.url;
  let isLoginPage = pathname.endsWith("/login");
  let hasAuthCookies = request.cookies.has("authTokens");
  console.log({ isLoginPage, hasAuthCookies, pathname });

  if (!isLoginPage && !hasAuthCookies) return redirectLoginPage(request);
  if (isLoginPage && hasAuthCookies) return redirectHomePage(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

function redirectLoginPage(request: NextRequest) {
  return NextResponse.redirect(new URL("/login", request.url));
}

function redirectHomePage(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}
