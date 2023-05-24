/*

import { NextRequest, NextResponse } from "next/server";


export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("prueba headders", "prueba");
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
	//Ejemplo de redireccion dependiendo de la ruta, se podrá usar para la ruta de gestion
  if (request.nextUrl.pathname.endsWith("/information")) {
    return NextResponse.redirect(
      new URL("/information/characters", request.url)
    );
  }
	//Ejemplo para verificar que un usuario este logeado
  if (request.nextUrl.pathname.startsWith("/information")) {
    const user = {
      name: "Jhon Doe",
      authenticated: true,
    };
    console.log(user);
    if (!user.authenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
*/

//El middleware solamente funcionará por aquellas rutas que empiecen por /information/ y cualquier cosa a continuacion
export const config = {
  matcher: [
    /* 
    El middleware solamente funcionará por aquellas rutas que 
    empiecen por /information/ y cualquier cosa a continuacion 
    */
    "",
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

// "100 10 1".match(/\d0*/g) -> 100, 10, 1
// "100 10 1".match(/\d0+/g) -> 100, 10
