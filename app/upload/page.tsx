'use client';
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
    public_id: string
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState('');

    return (
        <>
            {publicId && <CldImage
                src={publicId}
                alt="uploaded image"
                width="500"
                height="300"
                crop="scale"
            />}
            <CldUploadWidget
                uploadPreset="n0ar8zgg"
                onSuccess={(result, widget) => {
                    if (result.event !== 'success')
                        return;
                    const info = result.info as CloudinaryResult
                    setPublicId(info.public_id);
                }}
            >

                {({ open }) => {
                    return (
                        <button
                            onClick={() => open()}
                            className="bg-blue-500 text-white rounded-lg px-4 py-2">
                            Upload
                        </button>
                    );
                }}
            </CldUploadWidget>
        </>
    );
}

export default UploadPage;