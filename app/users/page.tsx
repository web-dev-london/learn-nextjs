import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";


interface Props {
    searchParams: {
        sortOrder: string
    }
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {

    console.log(sortOrder);

    return (
        <>
            <h1>Users</h1>
            <Link href="/users/new" className="btn btn-success">New User</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <UserTable sortOrder={sortOrder} />
            </Suspense>
        </>
    );
}

export default UsersPage;