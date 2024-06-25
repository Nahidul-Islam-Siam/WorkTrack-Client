

import {  MdWorkHistory } from 'react-icons/md'
import { GiCash } from "react-icons/gi";
import MenuItem from './MenuItems'
const EmployeeMenu = () => {
  return (
    <>
      <MenuItem icon={MdWorkHistory} label='Work Sheet' address='work-sheet' />
      <MenuItem icon={GiCash} label='Payment History' address='payment-history' />
      {/* <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      /> */}
    </>
  )
}

export default EmployeeMenu