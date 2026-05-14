import { useLoaderData } from "react-router-dom";

function JobsDetail() {
  const jobDetail = useLoaderData();

  return (
    <div>
      <h1>Job Details</h1>
    
<br />
      <b>Job Title: {jobDetail.title}</b> 
      <br />
      <hr />
            <b>Job Locations: {jobDetail.Locations}</b>
             
    </div>
  );
}

export default JobsDetail;
export const JobsDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/Jobs/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch job details");
  }

  return res.json();
};