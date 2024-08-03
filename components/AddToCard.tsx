'use client';

const AddToCard = () => {
    return (
        <>
            <button
                className="btn btn-primary text-white"
                onClick={() => console.log('Add to cart')}
            >
                Add to cart
            </button>
        </>
    );
}

export default AddToCard;