import { notFound } from "next/navigation";

interface Props {
    params: {
        id: number
    }
}

const UserDetailPage = ({ params: { id } }: Props) => {

    if (id > 10) notFound();

    return (
        <>
            <h1>User Detail id: {id}</h1>
        </>
    );
}

export default UserDetailPage;