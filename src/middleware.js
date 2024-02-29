import { NextResponse } from "next/server";

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname === "/profile") {
        const isAuthenticated = request.cookies.get("isAuthenticated")

        if (!isAuthenticated) { // undefined, null, false
            return NextResponse.rewrite(new URL("/", request.url))
        }
        else { // isAuthenticated: 'true'
            return NextResponse.rewrite(
                new URL(request.nextUrl.pathname, request.url)
            )
        }
    }
}


export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
}