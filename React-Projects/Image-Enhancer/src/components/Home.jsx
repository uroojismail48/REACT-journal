import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"
import { enhancedApi } from "../../utilities/enhancedApi"


function Home() {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhanced, setEnhanced] = useState(null)

    const [loading, setLoading] = useState(false);



 const handleImageUpload = async(file) => {
   setUploadImage(URL.createObjectURL(file));
     setLoading(true);
     try {
         const enhancedURL = await enhancedApi(file);
         setEnhanced(enhancedURL);
         setLoading(false);
   
     } catch (error) {
         console.log(error)
         alert("Error aagya")
   }
     
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
