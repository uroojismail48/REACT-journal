import { Outlet } from "react-router-dom"

import Contact from '../Components/Contact'
function ContactLayout() {
  return (
    <div>
      <Contact/>
      <Outlet/>
    </div>
  )
}

export default ContactLayout
