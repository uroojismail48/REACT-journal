import axios from "axios";



const URL_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const enhancedApi = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Task ID:", taskId);

    const enhancedImage = await poll(taskId);

    return enhancedImage;
  } catch (error) {
    console.log(error.response?.data || error.message);
;
  }
};

  console.log("POST URL:", `${BASE_URL}/api/tasks/visual/scale`);
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

 const response = await axios.post(
  `${BASE_URL}/api/tasks/visual/scale`,
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-KEY": URL_KEY,
    },
  }
);
console.log(response.data);
return response.data?.data?.task_id;

};

const fetchImage = async (taskId) => {
  const response = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": URL_KEY,
      },
    }
  );
    if (!response?.data?.image) {
    throw new Error ("Fetch To Fetch") 
}  console.log(response.data.image)
  return response.data.image;

};

const poll = async(taskId , retires = 0) => 
{
    const result = await fetchImage(taskId)
    if(result.state === 4)
    {
        console.log("processing...")

 
    if (retires >= 20) {
        throw new Error ("MAX Has Reached")
    }
    await new Promise ((resolve) => setTimeout(resolve, 2000))
        return poll(taskId, retires + 1);
       }
       return result;
}