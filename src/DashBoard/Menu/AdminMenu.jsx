
import MenuItem from './MenuItems'
import { FaPeopleGroup } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaPeopleGroup} label='All Employ List' address='all-employee-list' />
      <MenuItem
                icon={FcFeedback}
                label="FeedBack"
                address="feedback"
              />

    </>
  )
}

export default AdminMenu