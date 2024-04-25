import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	const isPublicPath = path === "/login" || path === "/";

	const token = request.cookies.get("token")?.value || "";

	if (isPublicPath && token) {
		return NextResponse.redirect(new URL("/", request.nextUrl));
	}

	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}

	return null;
}

export const config = {
	// Include all private routes in the matcher
	matcher: ["/login", "/", "/admin", "/admin/:path*", "/admin/password"],
};