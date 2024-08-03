'use client';

interface Props {
    error: Error;
    reset: () => void
}
const ErrorPage = ({ error, reset }: Props) => {

    console.log('Error', error);


    return (
        <>
            <h1>Error Page & an unexpected error has occured</h1>

            <button
                onClick={() => reset()}
                className="btn btn-primary text-white">
                Reset
            </button>
        </>
    );
}

export default ErrorPage;