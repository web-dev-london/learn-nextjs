import ProductCard from "@/components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { authOptions } from "./api/auth/authOptions";


export default async function Home() {
    const session = await getServerSession(authOptions)

    return (
        <>
            <main className="relative h-screen">
                <h1>
                    Hello {session && <span>{session.user!.name}</span>}
                </h1>
                <Link href="/users">Users</Link>
                <div
                    className=" my-5"
                >
                    <ProductCard />
                </div>
                <Image src='https://bit.ly/react-cover'
                    alt="Vercel Logo"
                    // width={300}
                    // height={170}
                    priority
                    fill
                    // style={{ objectFit: 'contain' }}
                    className="object-cover"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"

                />
            </main>
        </>
    )
}
