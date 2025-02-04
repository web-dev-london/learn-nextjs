'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    const { status, data: session } = useSession();

    return (
        <>
            <nav>
                <div
                    className="bg-slate-900 text-white p-4 flex gap-4 space-x-2"
                >
                    <Link href="/">Home</Link>
                    <Link href="/users">Users</Link>
                    {status === 'loading' && (<div>Loading...</div>)}
                    {status === 'authenticated' && (
                        <div>
                            {session.user!.name}
                            <Link
                                className="ml-4"
                                href="/api/auth/signout">Sign Out</Link>
                        </div>
                    )}
                    {status === 'unauthenticated' && (
                        <Link href="/api/auth/signin">Sign In</Link>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;