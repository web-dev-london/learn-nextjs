interface Props {
    params: {
        id: number;
        photoId: number;
    }
}

const UserPhotoDetail = ({ params: { id, photoId } }: Props) => {
    return (
        <>
            <h1>User Photo Detail Page id: {id} photoId: {photoId}</h1>
        </>
    );
}

export default UserPhotoDetail;