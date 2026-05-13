import { useLoaderData, Link } from "react-router-dom";



function Jobs() {
  const jobsData = useLoaderData();

  console.log(jobsData); // Check what shape this actually is

  const jobs = jobsData?.Jobs ?? jobsData; // handles both {Jobs:[]} and []

  if (!Array.isArray(jobs)) {
    return <h2>No jobs found.</h2>;
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",

    }}>
      {jobs.map((job) => (
        <Link to={`/jobs/${job.id}`} key={job.id}>
          <h3>{job.title}</h3>
          <h4>{job.location}</h4>
        </Link>
      ))}
    </div>
  );
}


export default Jobs;
export const JobsLoader = async () => {
  const res = await fetch("http://localhost:5000/Jobs");
  return res.json();
};