import { Outlet } from "react-router-dom"

function JobsLayout() {
  return (
    <div>
      <h2>JOBS OPENNING</h2>
      <p>LISTS are here!!</p>
      <Outlet/>
    </div>
  )
}

export default JobsLayout
