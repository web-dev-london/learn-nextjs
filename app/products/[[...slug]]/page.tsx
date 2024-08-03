
interface Props {
    params: {
        slug: string[];
    },
    searchParams: { sortOrder: string },
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
    return (
        <>
            <h1>Product Page slug: {slug} sortOrder: {sortOrder}</h1>
        </>
    );
}

export default ProductPage;