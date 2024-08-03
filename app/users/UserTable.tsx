import Link from "next/link";
import { sort } from "fast-sort";

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}
interface User {
    name: string;
    email: string;
    id: number;
    username: string;
    address: Address;
    phone: string;
}

const UserTable = async (props: {
    sortOrder: string
}) => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data: User[] = await res.json();

    const sortedUsers = sort(data).asc(props.sortOrder === 'email' ? user => user.email : user => user.name);


    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            <Link href="/users?sortOrder=name">Name</Link>
                        </th>
                        <th>
                            <Link href="/users?sortOrder=email">Email</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserTable;