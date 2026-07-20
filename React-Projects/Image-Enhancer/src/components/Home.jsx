import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"

function Home() {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhanced, setEnhanced] = useState(null)

    const [loading, setLoading] = useState(false);



 const handleImageUpload = (files) => {
   setUploadImage(URL.createObjectURL(files));
   setLoading(true);
 };
    return (
        <>
            <ImageUpload ShowImageHandler={handleImageUpload} />
            <ImagePreview
                upload={uploadImage}
                enhanced={enhanced}
                loading={loading}
            />
        </>
    );
}

export default Home
