'use client';
import { useRouter } from "next/navigation";


const NewUserPage = () => {
    const router = useRouter();

    return (
        <>
            <h1>New User Page</h1>
            <button
                onClick={() => router.push('/users')}
                className="btn btn-primary text-white">
                Create
            </button>
        </>
    );
}

export default NewUserPage;