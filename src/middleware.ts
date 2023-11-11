import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export const config = { matcher: ["/home", "/([^/.]*)"] };

export default withAuth(function middleware(req) {
    const url = req.nextUrl;

    return NextResponse.rewrite(url);
});
