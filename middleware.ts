// import { NextRequest, NextResponse } from "next/server";  // 1 way,
// import middleware from 'next-auth/middleware'  // 2 way,
// export default middleware 

export { default } from 'next-auth/middleware'


// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/login', request.url))
// }



export const config = {
    //*: zero or more 
    //? : zero or one
    //+ : one or more
    matcher: ['/users/:id*']
}