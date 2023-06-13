import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {

  /* 

  Para cada llamada se puede comprobar que lo que devuelve es algo diferente
  a usuario sin autorizacion, en el caso de que no tenga autorización redirigimos a login en ve de
  mostrar el error o tratamos de conseguir el refreshtoken y volvemos a tirar la llamada


  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("prueba headders", "prueba");
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  }); 
  
  */

  /*
   * Ejemplo de redireccion dependiendo de la ruta
   */
  if (request.nextUrl.pathname.endsWith("/redux")) {
    return NextResponse.redirect(new URL("/redux/state", request.url));
  }

  /*
   * Configuración para verificar que un usuario esté logeado
   */
  const authTokens = request.cookies.get("authTokens")?.value;

  if (request.nextUrl.pathname.startsWith("/redux") && !authTokens) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("authTokens");
    return response;
  }
  if (authTokens && request.nextUrl.pathname.startsWith("/login")) {
    const response = NextResponse.redirect(new URL("/", request.url));
    return response;
  }
}


export const config = {
  matcher: [
    /*
     * El middleware solamente funcionará por aquellas rutas que empiecen por
     *  ----->  /redux y cualquier cosa a continuacion 
     *  -----> /login
     */
    "/redux/:path", //"/admin(.*)"
    "/login",

    /*
     * Coinciden con todas las rutas de petición excepto las que empiezan por:
     * -----> api (API routes)
     * -----> _next/static (static files)
     * -----> _next/image (image optimization files)
     * -----> favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
